const { Pool } = require('pg');
const config=require('../../config/config')

const pool = new Pool({
    connectionString:config.database.url
});


// Test the database connection
pool.connect((err, client, done) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
  
    // Define the table creation SQL statement
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `;
  
    // Execute the table creation query
    client.query(createTableQuery, (createErr, result) => {
      if (createErr) {
        console.error('Error creating table:', createErr);
      } else {
        console.log('Table created or already exists');
      }
  
    });

    const createBlogTableQuery = `
    CREATE TABLE IF NOT EXISTS blog_posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      user_id INT NOT NULL,
      created_at TIMESTAMP NOT NULL,
      updated_at TIMESTAMP NOT NULL
    );
  `;

  client.query(createBlogTableQuery, (createErr, result) => {
    if (createErr) {
      console.error('Error creating table Blog:', createErr);
    } else {
      console.log('Table created or already exists: Blog');
    }

    // Release the client to the pool
    done();
  });



  });


module.exports = {
    query: (text, params) => pool.query(text, params),
};
