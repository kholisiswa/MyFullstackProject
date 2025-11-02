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

router.get('/', verifyToken, getUsers);           // get all users
router.get('/me', verifyToken, getProfile);       // get own profile
router.put('/me', verifyToken, updateUser);       // update own profile
router.delete('/me', verifyToken, deleteUser);    // delete own account
router.post('/avatar', verifyToken, upload.single('file'), uploadAvatar); // upload avatar

export default router;
