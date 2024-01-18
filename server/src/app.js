const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port=3000;
const db=require('./utils/db');
const errorHandlers=require('./utils/errorHandlers')

// Middlewares
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests
app.use(morgan('dev')); // Log HTTP requests to the console

const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/blog', blogRoutes);
app.use('/auth', authRoutes);


app.use(errorHandlers.handlePromiseRejection);
app.use(errorHandlers.handleErrors);
app.use(errorHandlers.handleNotFound);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
