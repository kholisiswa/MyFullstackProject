import axios from 'axios';

// Cek apakah aplikasi berjalan di 'production' (sudah di-deploy)
// atau 'development' (di localhost)
const isProduction = process.env.NODE_ENV === 'production';

/*
 * PENTING:
 * Anda akan mendapatkan URL backend Anda (dari Railway) di Langkah 2.
 * Setelah Anda mendapatkannya, Anda HARUS kembali ke file ini,
 * ganti 'https://ALAMAT-DARI-RAILWAY-ANDA.up.railway.app/api'
 * dengan URL Anda yang sebenarnya, lalu 'git push' lagi.
*/
const productionURL = 'https://ALAMAT-DARI-RAILWAY-ANDA.up.railway.app/api';
const developmentURL = 'http://localhost:5000/api';

const api = axios.create({
  // Gunakan URL yang sesuai
  baseURL: isProduction ? productionURL : developmentURL,
});

export default api;