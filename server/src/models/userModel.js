const pool = require('../utils/db'); 
const bcrypt = require('bcrypt');

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  static async create(username, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

      const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
      const values = [username, hashedPassword];
      const result = await pool.query(query, values);
      return new User(result.rows[0].id, username, hashedPassword);
    } catch (error) {
      throw error;
    }
  }

  static async findByUsername(username) {
    try {
      const query = 'SELECT * FROM users WHERE username = $1';
      const values = [username];
      const result = await pool.query(query, values);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        return new User(user.id, user.username, user.password);
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async authenticate(password) {
    return bcrypt.compare(password, this.password);
  }
}

module.exports = User;
