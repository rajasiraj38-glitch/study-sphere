const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_enterprise';

const sendTokenResponse = (publicUser, rawId, statusCode, res) => {
  // Generate token based ONLY on the raw internal ID
  const payload = { user: { id: rawId } };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5h' });

  const options = {
    expires: new Date(Date.now() + 5 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  };

  // Return the securely scrubbed DTO publicUser to the client
  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      user: publicUser
    });
};

// @route   POST /api/auth/register
// @desc    Register a new user through the Service Wall
router.post('/register', async (req, res) => {
  try {
    const publicUser = await authService.registerUser(req.body);
    sendTokenResponse(publicUser, publicUser.id, 201, res);
  } catch (err) {
    if (err.message === 'User already exists' || err.message === 'Username already taken') {
      return res.status(400).json({ success: false, msg: err.message });
    }
    console.error('[SECURITY] Route Error:', err.message);
    res.status(500).json({ success: false, msg: 'Server verification failed' });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user through the Service Wall
router.post('/login', async (req, res) => {
  try {
    const { userEntity, publicUser } = await authService.loginUser(req.body);
    sendTokenResponse(publicUser, userEntity.id, 200, res);
  } catch (err) {
    return res.status(400).json({ success: false, msg: err.message });
  }
});

// @route   GET /api/auth/logout
router.get('/logout', (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ success: true, data: {} });
});

module.exports = router;
