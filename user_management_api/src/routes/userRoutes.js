import express from 'express';
import {
  getUsers,
  getProfile,
  updateUser,
  deleteUser,
  uploadAvatar
} from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/', verifyToken, getUsers);          
router.get('/me', verifyToken, getProfile);       
router.put('/me', verifyToken, updateUser);       
router.delete('/me', verifyToken, deleteUser);    
router.post('/avatar', verifyToken, upload.single('file'), uploadAvatar); 

export default router;
