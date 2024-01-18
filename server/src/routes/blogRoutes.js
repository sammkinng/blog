const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new blog post
router.post('/', authMiddleware.verifyToken, blogController.createBlogPost);

// Update a blog post by ID
router.put('/:id', authMiddleware.verifyToken, blogController.updateBlogPost);

// Delete a blog post by ID
router.delete('/:id', authMiddleware.verifyToken, blogController.deleteBlogPost);

// Get a list of all blog posts
router.get('/', blogController.getAllBlogPosts);

// Get a single blog post by ID
router.get('/:id', blogController.getBlogPostById);

module.exports = router;
