import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

let t=sessionStorage.getItem('token')
if(t){
  api.defaults.headers.common['Authorization'] = `Bearer ${t}`;
}

// Set the authorization header with the JWT token
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Example: User Registration
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example: User Login
export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example: Create a New Blog Post
export const createBlogPost = async (postData) => {
  try {
    const response = await api.post('/blog', postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example: Update a Blog Post
export const updateBlogPost = async (postId, postData) => {
  try {
    const response = await api.put(`/blog/${postId}`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example: Delete a Blog Post
export const deleteBlogPost = async (postId) => {
  try {
    const response = await api.delete(`/blog/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example: Get a List of All Blog Posts
export const getAllBlogPosts = async () => {
  try {
    const response = await api.get('/blog');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example: Get a Single Blog Post by ID
export const getBlogPostById = async (postId) => {
  try {
    const response = await api.get(`/blog/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
