import express from 'express';
import {
  getItems,
  createNewItem,
  updateExistingItem,
  deleteExistingItem,
} from '../controllers/itemController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Rute untuk GET (semua item) dan POST (buat item baru)
// Dilindungi oleh middleware verifyToken
router.route('/')
  .get(verifyToken, getItems)
  .post(verifyToken, createNewItem);

// Rute untuk PUT (update) dan DELETE (hapus) berdasarkan ID
// Dilindungi oleh middleware verifyToken
router.route('/:id')
  .put(verifyToken, updateExistingItem)
  .delete(verifyToken, deleteExistingItem);

// INI YANG MEMPERBAIKI ERROR ANDA
export default router;

