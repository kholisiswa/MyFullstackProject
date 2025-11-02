import React, { useState } from 'react';
import { 
  Instagram, 
  Linkedin, 
  Mail,
  Menu,
  X
} from 'lucide-react';

import logoProfile from '../assets/images/profile.jpg'; 


// -- Komponen Navbar --
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Nama */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Wadah untuk border gradient */}
            <div className="w-9 h-9 p-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
              <img 
                src={logoProfile}
                alt="Logo kholis"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-bold text-xl text-gray-800 group-hover:text-purple-600 transition-colors">
              Iswa kholis
            </span>
          </a>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Ikon Sosial Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-800 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          {/* Tombol Hamburger (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700" aria-label="Buka menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 mt-6 border-t pt-4">
              <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-800 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

