const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

// WARNING: In production, NEVER hardcode these. They MUST come from a highly secure .env file.
// If you lose these keys, the entire database is permanently unreadable.
const encKey = process.env.DB_ENC_KEY || '7ws9fsS64liurKOnQjOva71W467D24nFql5U+pZ/CzU=';
const sigKey = process.env.DB_SIG_KEY || 'irsl0gb2MfmVqcdtXkpaxNfRbYhE3MKsZbHd+oRriy7KGyz2HHDeI9TL9Fq+IdW+E+nCq2bODLA8EvsK3ffzOw==';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'Beginner'
  },
  level: {
    type: Number,
    default: 0
  },
  trustScore: {
    type: Number,
    default: 100
  }
}, { timestamps: true });

// ENCRYPTION VAULT
// Encrypt the email and role inside the database.
// 'password' is not encrypted by this plugin because it is already securely hashed by bcrypt.
UserSchema.plugin(encrypt, { 
  encryptionKey: encKey, 
  signingKey: sigKey, 
  encryptedFields: ['email', 'role', 'trustScore'] 
});

module.exports = mongoose.model('User', UserSchema);
