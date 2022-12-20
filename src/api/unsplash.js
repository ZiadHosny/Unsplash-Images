import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID qvhGCWmDnn9CGYhYLDyNQ1X0IoOK5mojItKNp-0b2CA',
  },
});
