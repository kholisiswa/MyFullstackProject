import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

// Import Rute-Rute Anda
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
// Rute BARU untuk Dashboard CRUD
import itemRoutes from './src/routes/itemRoutes.js'; 

dotenv.config();

const app = express();
app.use(express.json());

// Mengambil CORS origins dari .env Anda
// Ini sudah benar dan cocok dengan kode Anda sebelumnya
const origins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:3000'];
app.use(cors({ origin: origins, methods: ['GET','POST','PUT','DELETE'] }));
app.use(helmet());

// Daftarkan Rute yang sudah ada
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Daftarkan Rute BARU untuk Items (Dashboard)
app.use('/api/items', itemRoutes);


// Basic health check
app.get('/', (req, res) => res.json({ message: 'User Management API is running' }));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

