const jwt = require('jsonwebtoken');
const config=require('../../config/config')

const jwtSecret = config.jwt.secret; 

// Function to generate a JWT token
exports.generateToken = (userId) => {
  const payload = { id: userId };
  const options = {
    expiresIn: config.jwt.expiresIn, 
  };

  return jwt.sign(payload, jwtSecret, options);
};

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
  // Check for the presence of a token in the request headers
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the token using the secret key
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    // If the token is valid, store the user's ID in the request object for future use
    req.userId = decoded.id;
    next();
  });
};
