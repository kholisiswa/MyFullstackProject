import React from 'react';

import profile from '../assets/images/profile.jpg';


function ProfileCard() {
  return (
    <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto">
      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-500"
      />
      <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
      <p className="text-gray-500 text-sm mb-4">Frontend Developer</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Contact Me
      </button>
    </div>
  );
}

export default ProfileCard;

