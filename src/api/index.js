import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPost = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts/create`, payload);