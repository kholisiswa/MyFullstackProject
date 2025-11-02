import pool from '../config/db.js';
import cloudinary from '../config/cloudinary.js';
import streamifier from 'streamifier';
import bcrypt from 'bcryptjs';

// =======================
// GET ALL USERS (Admin Only - optional)
// =======================
export const getUsers = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, username, email, role, avatar_url, updated_at FROM users ORDER BY id ASC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
};

// =======================
// GET PROFILE (Current User)
// =======================
export const getProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const result = await pool.query(
      'SELECT id, username, email, role, avatar_url, updated_at FROM users WHERE id = $1',
      [id]
    );

    if (!result.rows.length) return res.status(404).json({ message: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch profile', error: err.message });
  }
};

// =======================
// UPDATE PROFILE (Only self)
// =======================
export const updateUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { username, email, password } = req.body;

    // Validasi email
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ message: 'Invalid email format' });

    // Build dynamic query
    const updates = [];
    const values = [];
    let paramIndex = 1;

    if (username) {
      updates.push(`username = $${paramIndex++}`);
      values.push(username);
    }
    if (email) {
      updates.push(`email = $${paramIndex++}`);
      values.push(email);
    }
    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      updates.push(`password = $${paramIndex++}`);
      values.push(hashed);
    }

    updates.push(`updated_at = NOW()`);

    const query = `
      UPDATE users
      SET ${updates.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING id, username, email, role, avatar_url, updated_at;
    `;
    values.push(userId);

    const result = await pool.query(query, values);
    res.json({ message: 'Profile updated successfully', user: result.rows[0] });
  } catch (err) {
    console.error(err);
    if (err.code === '23505')
      return res.status(409).json({ message: 'Username or email already in use' });
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};

// =======================
// UPLOAD AVATAR (Cloudinary)
// =======================
export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const uploadStream = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'avatars' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await uploadStream();
    const { id } = req.user;

    const updated = await pool.query(
      'UPDATE users SET avatar_url = $1, updated_at = NOW() WHERE id = $2 RETURNING id, username, email, role, avatar_url;',
      [result.secure_url, id]
    );

    res.json({ message: 'Avatar uploaded successfully', user: updated.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

// =======================
// DELETE ACCOUNT (Self Only)
// =======================
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.user;
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ message: 'Account deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};
