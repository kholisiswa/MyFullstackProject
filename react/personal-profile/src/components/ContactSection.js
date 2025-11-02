import React from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin
} from 'lucide-react';

// -- Komponen Contact --
const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Latar Belakang Gradien Halus */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-100 via-pink-50 to-blue-100 opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-2xl shadow-xl max-w-5xl mx-auto overflow-hidden"> {/* BG diubah di sini */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Sisi Kiri - Info */}
            <div className="p-8 md:p-12"> {/* BG abu-abu dihapus dari sini */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tertarik Kolaborasi?
              </h2>
              <p className="text-gray-600 mb-8">
                Yuk, diskusikan project impianmu. Saya siap membantu membangun produk digital yang sesuai kebutuhan bisnismu.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-purple-600" />
                  <span className="text-gray-700">kholis.is26@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-purple-600" />
                  <span className="text-gray-700">0819-3465-4886</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-purple-600" />
                  <span className="text-gray-700">Surabaya, Indonesia</span>
                </div>
              </div>
            </div>
            
            {/* Sisi Kanan - Form */}
            <div className="p-8 md:p-12">
              <form>
                <div className="mb-4">
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                  <input 
                    type="text" 
                    id="nama" 
                    placeholder="Nama Anda"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email Anda"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea 
                    id="pesan" 
                    rows="4" 
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Kirim Pesan <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

