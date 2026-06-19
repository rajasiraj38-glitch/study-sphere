class UserDTO {
  // Strip out sensitive fields (password, _id, __v, encrypted fields if any)
  static toPublic(user) {
    return {
      id: user._id || user.id, // Expose clean ID
      username: user.username,
      role: user.role,
      level: user.level
      // Notice we do NOT return email or password
    };
  }
}

module.exports = UserDTO;
