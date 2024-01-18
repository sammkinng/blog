const pool = require('../utils/db'); 

class Blog {
  constructor() {
    
  }

  // Create a new blog post
  static async createBlogPost(title, content, userId) {
    const query = {
      text: 'INSERT INTO blog_posts (title, content, user_id, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
      values: [title, content, userId],
    };

    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Update a blog post by ID
  static async updateBlogPost(postId, title, content) {
    const query = {
      text: 'UPDATE blog_posts SET title = $1, content = $2, updated_at = NOW() WHERE id = $3 RETURNING *',
      values: [title, content, postId],
    };

    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Delete a blog post by ID
  static async deleteBlogPost(postId) {
    const query = {
      text: 'DELETE FROM blog_posts WHERE id = $1 RETURNING *',
      values: [postId],
    };

    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Get a list of all blog posts
  static async getAllBlogPosts() {
    const query = `
    SELECT blog_posts.*, users.username
    FROM blog_posts
    JOIN users ON blog_posts.user_id = users.id
  `;
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // Get a single blog post by ID
  static async getBlogPostById(postId) {
    const query = {
      text: 'SELECT * FROM blog_posts WHERE id = $1',
      values: [postId],
    };

    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Blog;
