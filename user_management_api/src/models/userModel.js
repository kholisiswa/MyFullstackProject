import pool from '../config/db.js';
import bcrypt from 'bcryptjs';

// =======================
// CREATE USER (Register)
// =======================
export const createUser = async ({ username, email, password, role = 'user' }) => {
  const query = `
    INSERT INTO users (username, email, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING id, username, email, role, avatar_url;
  `;
  const { rows } = await pool.query(query, [username, email, password, role]);
  return rows[0];
};


// =======================
// FIND BY EMAIL / ID
// =======================
export const findUserByEmail = async (email) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return rows[0];
};

export const findUserById = async (id) => {
  const { rows } = await pool.query(
    'SELECT id, username, email, role, avatar_url, updated_at FROM users WHERE id = $1',
    [id]
  );
  return rows[0];
};

// =======================
// UPDATE USER
// =======================
export const updateUserById = async (id, fields) => {
  const updates = [];
  const values = [];
  let paramIndex = 1;

  if (fields.username) {
    updates.push(`username = $${paramIndex++}`);
    values.push(fields.username);
  }
  if (fields.email) {
    updates.push(`email = $${paramIndex++}`);
    values.push(fields.email);
  }
  if (fields.password) {
    const hashed = await bcrypt.hash(fields.password, 10);
    updates.push(`password = $${paramIndex++}`);
    values.push(hashed);
  }
  if (fields.avatar_url) {
    updates.push(`avatar_url = $${paramIndex++}`);
    values.push(fields.avatar_url);
  }

  updates.push(`updated_at = NOW()`);
  values.push(id);

  const query = `
    UPDATE users
    SET ${updates.join(', ')}
    WHERE id = $${paramIndex}
    RETURNING id, username, email, role, avatar_url, updated_at;
  `;

  const { rows } = await pool.query(query, values);
  return rows[0];
};

// =======================
// DELETE USER
// =======================
export const deleteUserById = async (id) => {
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
};

// =======================
// GET ALL USERS
// =======================
export const getAllUsers = async () => {
  const { rows } = await pool.query(
    'SELECT id, username, email, role, avatar_url, updated_at FROM users ORDER BY id ASC'
  );
  return rows;
};
