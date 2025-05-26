/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#0ff',
        dark: '#0f0f1e',
        'neon-blue': '#00f7ff', // Adding a more specific neon color
        'neon-purple': '#a8a1ff', // Adding a complementary neon purple color
      },
      animation: {
        pulseRing: 'pulseRing 2s infinite', // Adding custom pulse animation for rings
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.1)', opacity: 0.6 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      boxShadow: {
        'neon-glow': '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff', // Neon glow shadow
      },
    },
  },
  plugins: [],
};
