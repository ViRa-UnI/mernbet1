const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

const api = {
  // User endpoints
  registerUser: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  loginUser: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  getUserProfile: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/profile`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Game endpoints
  getGameList: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/games`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  getGameDetails: async (gameId) => {
    try {
      const response = await axios.get(`${BASE_URL}/games/${gameId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default api;