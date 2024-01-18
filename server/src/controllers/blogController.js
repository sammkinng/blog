const blogModel = require('../models/blogModel');

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required.' });
  }

  try {
    const newPost = await blogModel.createBlogPost(title, content,req.userId);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create a new blog post.' });
  }
};

// Update a blog post by ID
exports.updateBlogPost = async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required.' });
  }

  try {
    const updatedPost = await blogModel.updateBlogPost(postId, title, content);

    if (!updatedPost) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update the blog post.' });
  }
};

// Delete a blog post by ID
exports.deleteBlogPost = async (req, res) => {
  const postId = req.params.id;

  try {
    const deletedPost = await blogModel.deleteBlogPost(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    res.json({ message: 'Blog post deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete the blog post.' });
  }
};

// Get a list of all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const posts = await blogModel.getAllBlogPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve blog posts.' });
  }
};

// Get a single blog post by ID
exports.getBlogPostById = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await blogModel.getBlogPostById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve the blog post.' });
  }
};
