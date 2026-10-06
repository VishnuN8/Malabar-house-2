/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0806',
          900: '#120e0a',
          800: '#1c1610',
          700: '#2a2118',
          600: '#3a2e21',
        },
        gold: {
          50: '#fbf3e0',
          100: '#f6e7c1',
          200: '#ecd08c',
          300: '#e0b85a',
          400: '#d4a23a',
          500: '#b8862a',
          600: '#946820',
          700: '#6e4d18',
          800: '#4a3310',
        },
        bronze: {
          300: '#c89878',
          400: '#a87858',
          500: '#8a5e42',
          600: '#6e4a33',
        },
        saffron: {
          400: '#e8a33d',
          500: '#d98a1f',
          600: '#b86f12',
        },
        cream: {
          50: '#faf6ee',
          100: '#f3ead6',
          200: '#e8d8b8',
        },
        leaf: {
          400: '#6b8e4e',
          500: '#4f7236',
          600: '#3a562a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Tiro Devanagari Sanskrit"', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
