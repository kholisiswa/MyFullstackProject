/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Anda dapat menambahkan font kustom di sini
      fontFamily: {
        // Ganti 'Inter' dengan 'Poppins' atau font pilihan Anda
        sans: ['Inter', 'sans-serif'],
      },
      // Perluas palet warna berdasarkan desain Figma
      colors: {
        'custom-purple': '#8B5CF6', // Contoh
        'custom-blue': '#3B82F6',   // Contoh
        'custom-light-pink': '#FBC2EB',
        'custom-light-violet': '#E0C3FC',
      }
    },
  },
  plugins: [],
}