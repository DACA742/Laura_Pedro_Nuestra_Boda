/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        onyx: '#404040',
        'eerie-black': '#212121',
        jet: '#313131',
        'dim-gray': '#6B6B6B',
        'antiflash-white': '#ECECEC',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #404040 0%, #212121 25%, #313131 50%, #6B6B6B 75%, #ECECEC 100%)',
      },
    },
  },
  plugins: [],
};