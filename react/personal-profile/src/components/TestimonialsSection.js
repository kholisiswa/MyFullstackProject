import React from 'react';


import avatarCitra from '../assets/images/citra-nadya.jpg'; 
import avatarRama from '../assets/images/rama-putra.jpg';   

// -- Komponen Testimonials --
const TestimonialsSection = () => {
  const testimonials = [
    {
      avatar: avatarCitra, 
      name: 'Citra Nadya',
      role: 'Product Manager, Fintech',
      quote: '"Arie mampu memahami kebutuhan tim kami dan menerjemahkannya menjadi desain yang sangat user-friendly. Komunikasi dan delivery selalu on time!"'
    },
    {
      avatar: avatarRama, 
      name: 'Rama Putra',
      role: 'CEO, Edustartup',
      quote: '"Kreativitas & kecepatan kerja Arie luar biasa. Landing page yang dibuatkan sangat modern & efektif meningkatkan konversi produk kami."'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Klien
          </h2>
          <p className="text-gray-600 text-lg">
            Apa kata mereka yang pernah bekerja sama dengan saya.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center 
                            p-[3px] bg-gradient-to-br from-pink-500 to-purple-500"> 
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

