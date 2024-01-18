const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const authMiddleware = require('../middleware/authMiddleware');

// Register a new user
exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findByUsername(username);

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = await User.create(username, password);

    // Create a JWT token
    const token = authMiddleware.generateToken(newUser.id)
    res.json({ token,username });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
};

// Login as an existing user
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findByUsername(username);

    if (!user || !(await user.authenticate(password))) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Create a JWT token
    const token = authMiddleware.generateToken(user.id)

    res.json({ token,username:user.username });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Authentication failed' });
  }
};
