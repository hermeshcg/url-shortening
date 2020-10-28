import axios from 'axios';

const api = axios.create({
  baseURL: `https://api-ssl.bitly.com/`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default api;
