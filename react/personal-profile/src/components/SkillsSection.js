import React from 'react';

const IconFigma = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 3.75C15 4.99264 13.9926 6 12.75 6C11.5074 6 10.5 4.99264 10.5 3.75C10.5 2.50736 11.5074 1.5 12.75 1.5C13.9926 1.5 15 2.50736 15 3.75Z" fill="#F24E1E"/>
    <path d="M10.5 8.25C10.5 9.49264 11.5074 10.5 12.75 10.5H15V15H10.5V8.25Z" fill="#A259FF"/>
    <path d="M6 3.75C6 4.99264 7.00736 6 8.25 6C9.49264 6 10.5 4.99264 10.5 3.75C10.5 2.50736 9.49264 1.5 8.25 1.5C7.00736 1.5 6 2.50736 6 3.75Z" fill="#FF7262"/>
    <path d="M6 8.25C6 9.49264 7.00736 10.5 8.25 10.5H10.5V15H6V8.25Z" fill="#1ABCFE"/>
    <path d="M6 12.75C6 13.9926 7.00736 15 8.25 15H10.5V19.5C10.5 20.7426 9.49264 21.75 8.25 21.75C7.00736 21.75 6 20.7426 6 19.5V12.75Z" fill="#0ACF83"/>
  </svg>
);

const IconJavaScript = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M7.5 8.25H9.75V15.75H7.5V8.25ZM11.25 15.75H13.5V11.25H11.25V15.75ZM11.25 8.25H13.5V10.5H11.25V8.25ZM15 15.75H17.25C17.25 15.75 17.25 13.626 17.25 12.75C17.25 11.874 16.5 11.25 15.75 11.25H15V10.5H17.25V8.25H15V15.75Z" fill="#000000"/>
  </svg>
);

const IconReact = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1"/>
  </svg>
);

const IconHtmlCss = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3H20L18 18.5L12 21L6 18.5L4 3Z" fill="#E34F26"/>
    <path d="M12 5V19.2L17 17.8L18.2 5H12Z" fill="#F06529"/>
    <path d="M12 10.5H15.5L15.2 14L12 15V10.5ZM12 7H16L15.7 10H12V7Z" fill="#EBEBEB"/>
    <path d="M12 10.5H8.5L8.3 8.5H12V10.5ZM12 15L8.8 14L8.7 12.5H12V15ZM12 7V5.5L6.8 7L7 10H12V7Z" fill="white"/>
  </svg>
);


// -- Komponen Skills --
const SkillsSection = () => {
  const skills = [
    { 
      icon: <IconFigma />, 
      title: 'Figma', 
      description: 'UI Design, Prototyping' 
    },
    { 
      icon: <IconJavaScript />, 
      title: 'JavaScript', 
      description: 'Front-End Development' 
    },
    { 
      icon: <IconReact />, 
      title: 'React', 
      description: 'Web Apps & SPA' 
    },
    { 
      icon: <IconHtmlCss />, 
      title: 'HTML & CSS', 
      description: 'Responsive Design' 
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keahlian
          </h2>
          <p className="text-gray-600 text-lg">
            Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.title} 
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-500">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
