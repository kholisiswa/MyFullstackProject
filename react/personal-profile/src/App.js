import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// --- Komponen Halaman Portofolio Anda ---
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// --- Komponen Halaman Tugas (Login/Dashboard) ---

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function HalamanUtama() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Halaman Utama (Portofolio Anda) */}
        <Route path="/" element={<HalamanUtama />} />

        {/* Rute Publik dari Tugas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rute Privat (Dashboard) dari Tugas */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        
        {/* Rute Not Found */}
        <Route path="*" element={<h3 className="text-center mt-5">404 Not Found</h3>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

