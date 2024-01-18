
const handlePromiseRejection = (err, req, res, next) => {
    console.error('Unhandled Promise Rejection:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  // Handle general application errors
  const handleErrors = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  // Not Found (404) error handler
  const handleNotFound = (req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
  };
  
  module.exports = {
    handlePromiseRejection,
    handleErrors,
    handleNotFound,
  };
  