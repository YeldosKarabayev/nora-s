
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
  extend: {
    animation: {
      fadeIn: 'fadeIn 0.3s ease-out',
      slideUp: 'slideUp 0.3s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  },
},
  plugins: [],
};