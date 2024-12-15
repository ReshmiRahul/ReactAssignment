import axios from 'axios';

// Base URL for your API
const API_URL = 'https://your-api-endpoint.com';

// Fetch skills data from the backend
export const fetchSkills = async () => {
  try {
    const response = await axios.get(`${API_URL}/skills`);
    return response.data;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};

// Fetch projects data from the backend
export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
