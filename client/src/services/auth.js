import { registerUser, loginUser } from './api';
import { setAuthToken } from './api'; 

// Example: User Registration
export const register = async (userData) => {
  try {
    const response = await registerUser(userData);

    // After registration, set the JWT token in the API service
    setAuthToken(response.token);
    sessionStorage.setItem('loggedIn','true')
    sessionStorage.setItem('token',response.token)
    sessionStorage.setItem('username',response.username)
    return response;
  } catch (error) {
    throw error;
  }
};

// Example: User Login
export const login = async (userData) => {
  try {
    const response = await loginUser(userData);

    // After successful login, set the JWT token in the API service
    setAuthToken(response.token);
    sessionStorage.setItem('token',response.token)
    sessionStorage.setItem('username',response.username)
    sessionStorage.setItem('loggedIn','true')
    return response;
  } catch (error) {
    throw error;
  }
};


export default { register, login};
