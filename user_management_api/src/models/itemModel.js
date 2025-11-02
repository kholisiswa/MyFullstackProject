import pool from '../config/db.js';

// Get semua item milik 1 user
export const findAllItemsByUserId = async (userId) => {
  const query = 'SELECT * FROM items WHERE user_id = $1 ORDER BY id DESC';
  const { rows } = await pool.query(query, [userId]);
  return rows;
};

// Buat item baru
// NAMA FUNGSI INI SUDAH DIPERBAIKI (sebelumnya createNewItem)
export const createItem = async ({ title, description, userId }) => {
  const query = `
    INSERT INTO items (title, description, user_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [title, description, userId]);
  return rows[0];
};

// Cari 1 item berdasarkan ID-nya
export const findItemById = async (itemId) => {
  const query = 'SELECT * FROM items WHERE id = $1';
  const { rows } = await pool.query(query, [itemId]);
  return rows[0];
};

// Update item
export const updateItemById = async (itemId, { title, description }) => {
  const query = `
    UPDATE items
    SET title = $1, description = $2
    WHERE id = $3
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [title, description, itemId]);
  return rows[0];
};

// Hapus item
export const deleteItemById = async (itemId) => {
  const query = 'DELETE FROM items WHERE id = $1';
  await pool.query(query, [itemId]);
};

