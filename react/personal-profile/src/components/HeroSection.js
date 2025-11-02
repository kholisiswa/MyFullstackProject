import React from 'react';
import { 
  Lightbulb, 
  Rocket
} from 'lucide-react';

import arieProfileImage from '../assets/images/profile.jpg'; 

// -- Komponen Hero --
const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-100 to-pink-100 pt-20 pb-20 md:pt-32 md:pb-32">
      {/* Elemen Dekoratif - Lingkaran Kiri */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 md:w-[32rem] md:h-[32rem] bg-violet-200 rounded-full filter blur-3xl opacity-40 -translate-y-1/2 z-0"></div>
      {/* Elemen Dekoratif - Lingkaran Kanan */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 md:w-[32rem] md:h-[32rem] bg-orange-100 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-6 relative z-10"> {/* Menambahkan relative z-10 agar konten di atas lingkaran */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Konten Teks */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="text-purple-600 font-semibold">Hi, I'm</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2 mb-4">
              Muhammad Iswa Nur Kholis
            </h1>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
              UI/UX Designer & Web Developer
            </span>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Membantu brand dan bisnis membangun produk digital yang impactful lewat desain yang kreatif, modern, dan user-centric.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="#portfolio"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Lihat Karya
              </a>
              <a 
                href="#contact"
                className="bg-white text-purple-600 font-medium px-6 py-3 rounded-lg border border-purple-300 hover:bg-purple-50 transition-colors"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Gambar Profile */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="w-64 h-64 md:w-96 md:h-96 relative">
              <img 
                src={arieProfileImage} 
                alt="Arie Pratama"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                // Properti style clipPath dihapus dari sini
              />
              {/* Ikon Mengambang */}
              <div className="absolute -top-8 -left-8 bg-white p-3 rounded-2xl shadow-lg animate-pulse">
                <Lightbulb size={24} className="text-yellow-400" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-2xl shadow-lg animate-bounce">
                <Rocket size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

