import axios from 'axios';


const isProduction = process.env.NODE_ENV === 'production';


const productionURL = 'https://myfullstackproject-production.up.railway.app/api';
const developmentURL = 'http://localhost:5000/api';

const api = axios.create({
  // Gunakan URL yang sesuai
  baseURL: isProduction ? productionURL : developmentURL,
});

export default api;