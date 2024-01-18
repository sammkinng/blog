module.exports = {
    // Database configuration
    database: {
      url: process.env.DB_URL || 'postgres://postgres:username@localhost:port/database_name',
    },
    
    // JWT (JSON Web Token) configuration
    jwt: {
      secret: process.env.JWT_SECRET || 'your-secret-key',
      expiresIn: '1h', // Token expiration time
    },
    
    // Server configuration
    server: {
      port: process.env.PORT || 3000,
    },
  };
  