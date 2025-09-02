import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const getUser = async (id) => {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
};

export const getUserPosts = async (id) => {
    const response = await axios.get(`${API_URL}/users/${id}/posts`);
    return response.data;
};

export const getUserAlbums = async (id) => {
    const response = await axios.get(`${API_URL}/users/${id}/albums`);
    return response.data;
};

export const getUserTodos = async (id) => {
    const response = await axios.get(`${API_URL}/users/${id}/todos`);
    return response.data;
};
