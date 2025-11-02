import {
  findAllItemsByUserId,
  createItem,
  updateItemById,
  deleteItemById,
  findItemById
} from '../models/itemModel.js';

// @desc    Get all items untuk user yang login
// @route   GET /api/items
// @access  Private
export const getItems = async (req, res) => {
  try {
    // Cari item berdasarkan ID user yang didapat dari middleware auth (req.user.id)
    const items = await findAllItemsByUserId(req.user.id);
    res.json(items);
  } catch (err) {
    console.error('getItems Error:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create new item
// @route   POST /api/items
// @access  Private
export const createNewItem = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id; // Ambil user ID dari token

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const newItem = await createItem({ title, description, userId });
    res.status(201).json(newItem);
  } catch (err) {
    console.error('createNewItem Error:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update an item
// @route   PUT /api/items/:id
// @access  Private
export const updateExistingItem = async (req, res) => {
  const { title, description } = req.body;
  const itemId = req.params.id;
  const userId = req.user.id;

  try {
    const item = await findItemById(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Pastikan user yang mengedit adalah pemilik item
    if (item.user_id !== userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedItem = await updateItemById(itemId, { title, description });
    res.json(updatedItem);
  } catch (err) {
    console.error('updateExistingItem Error:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete an item
// @route   DELETE /api/items/:id
// @access  Private
export const deleteExistingItem = async (req, res) => {
  const itemId = req.params.id;
  const userId = req.user.id;

  try {
    const item = await findItemById(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Pastikan user yang menghapus adalah pemilik item
    if (item.user_id !== userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await deleteItemById(itemId);
    res.json({ message: 'Item removed' });
  } catch (err) {
    console.error('deleteExistingItem Error:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

