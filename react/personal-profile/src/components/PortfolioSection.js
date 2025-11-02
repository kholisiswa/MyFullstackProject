import React from 'react';
import { ExternalLink } from 'lucide-react';

import goFinanceApp from '../assets/images/go-finance-app.png';
import eduSmartLandingPage from '../assets/images/edusmart-landing-page.png'; 
import dataHubDashboard from '../assets/images/datahub-dashboard.png';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      image: goFinanceApp,
      category: 'Mobile App',
      title: 'GoFinance App',
      description: 'Aplikasi manajemen keuangan dengan desain yang clean, modern, dan mudah digunakan.',
      link: '#',
    },
    {
      id: 2,
      image: eduSmartLandingPage,
      category: 'Website',
      title: 'EduSmart Landing Page',
      description: 'Landing page untuk platform pendidikan dengan fokus pada visual storytelling & UX.',
      link: '#',
    },
    {
      id: 3,
      image: dataHubDashboard,
      category: 'Dashboard',
      title: 'DataHub Dashboard',
      description: 'Dashboard analytics untuk SaaS dengan visual data yang interaktif & engaging.',
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Portfolio Pilihan
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Beberapa project terbaik yang pernah saya kerjakan untuk klien lokal maupun
          internasional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Detail <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

