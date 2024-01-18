import { createBlogPost, updateBlogPost, deleteBlogPost, getAllBlogPosts, getBlogPostById } from './api';

//  Create a New Blog Post
export const createPost = async (postData) => {
  try {
    const response = await createBlogPost(postData);
    return response;
  } catch (error) {
    throw error;
  }
};

//  Update a Blog Post
export const updatePost = async (postId, postData) => {
  try {
    const response = await updateBlogPost(postId, postData);
    return response;
  } catch (error) {
    throw error;
  }
};

//  Delete a Blog Post
export const deletePost = async (postId) => {
  try {
    const response = await deleteBlogPost(postId);
    return response;
  } catch (error) {
    throw error;
  }
};

//  Get a List of All Blog Posts
export const getAllPosts = async () => {
  try {
    const response = await getAllBlogPosts();
    return response;
  } catch (error) {
    throw error;
  }
};

//  Get a Single Blog Post by ID
export const getPostById = async (postId) => {
  try {
    const response = await getBlogPostById(postId);
    return response;
  } catch (error) {
    throw error;
  }
};

export default { createPost, updatePost, deletePost, getAllPosts, getPostById };
