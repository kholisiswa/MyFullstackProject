import React from 'react';
import { 
  UserRound, 
  CheckCircle, 
  Send
} from 'lucide-react';

// -- Komponen About --
const AboutSection = () => {
  const checkListItems = ["Problem Solver", "Team Player", "Fast Learner", "Kreatif & Adaptif"];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Ikon */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-purple-100 rounded-full flex items-center justify-center">
                <UserRound size={80} className="text-purple-600" />
              </div>
            </div>
            {/* Konten Teks */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tentang Saya
              </h2>
              <p className="text-gray-600 mb-6">
                Saya adalah seorang UI/UX Designer & Web Developer berdomisili di Surabaya Mahasiswa dari Unesa Prodi Teknik Informatika. Passion saya adalah menciptakan solusi digital yang tidak hanya indah secara visual, tapi juga mudah digunakan dan berdampak positif bagi pengguna.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {checkListItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href="#contact"
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Send size={18} />
                <span>Konsultasi Gratis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

