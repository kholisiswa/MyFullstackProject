import express from 'express';
import {
  getItems,
  createNewItem,
  updateExistingItem,
  deleteExistingItem,
} from '../controllers/itemController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();


router.route('/')
  .get(verifyToken, getItems)
  .post(verifyToken, createNewItem);


router.route('/:id')
  .put(verifyToken, updateExistingItem)
  .delete(verifyToken, deleteExistingItem);


export default router;

