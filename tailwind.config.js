/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'cardFloat': 'cardFloat 6s ease-in-out infinite',
        'starGlow': 'starGlow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shootingStar': 'shootingStar 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        cardFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
          '25%': { transform: 'translateY(-5px) rotateZ(0.5deg)' },
          '50%': { transform: 'translateY(-10px) rotateZ(0deg)' },
          '75%': { transform: 'translateY(-5px) rotateZ(-0.5deg)' },
        },
        starGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 2px #fbbf24)' },
          '50%': { filter: 'drop-shadow(0 0 8px #fbbf24) drop-shadow(0 0 12px #f59e0b)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4)' },
        },
        shootingStar: {
          '0%': {
            transform: 'translateX(-100px) translateY(0px)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100vw) translateY(-100px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}