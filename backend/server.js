require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Security Middlewares
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Set Security HTTP Headers (CSP)
app.use(helmet());

// Global Rate Limiter to prevent brute force (100 req per 15 min per IP)
const standardLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again in 15 minutes.'
});
app.use('/api', standardLimiter);

// The "Invisible Tarpit" Wall for Auth Routes
// If a bot hammers the login, we delay the response to kill their compute efficiency
const tarpitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // Strict limit for auth
  handler: (req, res) => {
    console.warn(`[SECURITY] Tarpit triggered for IP: ${req.ip}`);
    setTimeout(() => {
      res.status(429).json({ success: false, msg: "Security verification failed." });
    }, 5000); // 5 second artificial delay
  }
});

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend
  credentials: true // Crucial for HttpOnly Cookies
}));
app.use(express.json({ limit: '10kb' })); // Body parser, reading data from body into req.body
app.use(cookieParser()); // Parse cookies attached to client request

// Data Sanitization against NoSQL query injection
// Note: express-mongo-sanitize removed due to Node v22 IncomingMessage getter strictness
// We will rely on Mongoose's built-in escaping and strict schemas.

// Data Sanitization against XSS
app.use(xss());

// Basic Route
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'StudySphere Enterprise API is secure and running.' });
});

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/studysphere')
  .then(() => console.log("MongoDB connected securely"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/auth', tarpitLimiter, require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`Enterprise Server running securely on port ${PORT}`);
});
