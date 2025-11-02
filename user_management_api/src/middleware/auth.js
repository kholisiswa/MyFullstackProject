import jwt from 'jsonwebtoken';
// PERBAIKAN: Impor 'findUserById' dari model Postgres Anda
import { findUserById } from '../models/userModel.js'; // Pastikan path ke userModel benar

// Mengganti nama fungsi menjadi 'verifyToken' dan mengekspornya
export const verifyToken = async (req, res, next) => {
  let token;

  // Cek apakah header Authorization ada dan menggunakan skema Bearer
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Ambil token dari header (Bearer <token>)
      token = req.headers.authorization.split(' ')[1];

      // Verifikasi token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Pastikan JWT_SECRET ada di .env

      // PERBAIKAN: Gunakan 'findUserById' dari model Anda (bukan Mongoose)
      // 'decoded.id' akan berisi 'id' dari token
      req.user = await findUserById(decoded.id);

      if (!req.user) {
         return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      next(); // Lanjut ke controller/rute berikutnya
    } catch (error) {
      console.error('Token verification error:', error.message); // Tambahkan log error
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

