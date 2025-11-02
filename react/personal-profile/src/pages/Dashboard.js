import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Container } from 'react-bootstrap';
import api from '../api/api';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);


  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/items', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(res.data);
    } catch (err) {
      alert('Gagal mengambil data. Mungkin sesi Anda berakhir, silakan login kembali.');
    }
  };

  // Fungsi untuk menyimpan (CREATE atau UPDATE)
  const handleSave = async () => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      if (editId) {
        // UPDATE
        await api.put(`/items/${editId}`, form, { headers });
      } else {
        // CREATE
        await api.post('/items', form, { headers });
      }
      setForm({ title: '', description: '' });
      setEditId(null);
      setShow(false);
      fetchData(); // Muat ulang data
    } catch (err) {
      alert('Gagal menyimpan data');
    }
  };

  // Fungsi untuk Hapus (DELETE)
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus item ini?')) {
      try {
        const token = localStorage.getItem('token');
        await api.delete(`/items/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchData(); // Muat ulang data
      } catch (err) {
        alert('Gagal menghapus data');
      }
    }
  };

  // Fungsi untuk membuka modal Edit
  const handleEdit = (item) => {
    setForm({ title: item.title, description: item.description });
    setEditId(item.id || item._id); // Menyesuaikan jika backend menggunakan _id
    setShow(true);
  };

  // Fungsi untuk membuka modal Tambah
  const handleShowAdd = () => {
    setForm({ title: '', description: '' });
    setEditId(null);
    setShow(true);
  };

  // Panggil fetchData saat komponen pertama kali di-mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Dashboard</h3>
        <Button onClick={handleShowAdd}>Tambah Data</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Judul</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id || item._id}>
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <Button
                  size="sm"
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(item.id || item._id)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal untuk Tambah / Edit */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Edit Data' : 'Tambah Data'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Dashboard;

