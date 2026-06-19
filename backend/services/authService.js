const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');
const UserDTO = require('../dtos/userDTO');

class AuthService {
  async registerUser(data) {
    const { username, email, password, level } = data;

    const mongoose = require('mongoose');

    // DEV BYPASS
    if (mongoose.connection.readyState !== 1) {
      console.log("[DEV] DB offline: Bypassing auth check for signup", email);
      return { username: username || "DeveloperMode", trustScore: 99, role: level || "Admin", level: 5 };
    }

    // Check existing
    if (await userRepository.findByEmail(email)) {
      throw new Error('User already exists');
    }
    if (await userRepository.findByUsername(username)) {
      throw new Error('Username already taken');
    }

    // Hash password inside the core loop, NEVER save plain text
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user object via repository
    const newUser = await userRepository.create({
      username,
      email,
      password: hashedPassword,
      level: level === 'Learner' ? 1 : 0,
      role: level === 'Learner' ? 'Learner' : 'Beginner'
    });

    // Return the sanitized DTO
    return UserDTO.toPublic(newUser);
  }

  async loginUser(data) {
    const { email, password } = data;

    const mongoose = require('mongoose');

    // DEV BYPASS: If DB is offline, fake the login to allow UI testing
    if (mongoose.connection.readyState !== 1) {
      console.log("[DEV] DB offline: Bypassing auth check for", email);
      return {
        userEntity: { _id: "fake-id-123", email },
        publicUser: { username: "DeveloperMode", trustScore: 99, role: "Admin", level: 5 }
      };
    }

    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error('Invalid Credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid Credentials');

    // Return sanitized DTO
    return {
      userEntity: user, // Raw entity needed for ID token generation
      publicUser: UserDTO.toPublic(user)
    };
  }
}

module.exports = new AuthService();
