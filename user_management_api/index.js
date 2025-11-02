import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

// Import Routes
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import itemRoutes from './src/routes/itemRoutes.js'; 

dotenv.config();

const app = express();

app.use(express.json()); // Middleware untuk parsing JSON

// --- START: Konfigurasi CORS yang Benar ---
const allowedOrigins = process.env.CORS_ORIGIN 
    ? process.env.CORS_ORIGIN.split(',')
    : ['http://localhost:3000']; 

app.use(cors({ 
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // <-- WAJIB: Mengizinkan pengiriman cookies dan header otorisasi
}));
// --- END: Konfigurasi CORS yang Benar ---

app.use(helmet()); // Middleware keamanan

// Definisi Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// Route Utama
app.get('/', (req, res) => res.json({ message: 'User Management API is running' }));

// Memulai Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`CORS Origin diizinkan: ${allowedOrigins.join(', ')}`);
});