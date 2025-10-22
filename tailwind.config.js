export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dun': {
          DEFAULT: '#D6C4AA',
          100: '#342819',
          200: '#675132',
          300: '#9b794b',
          400: '#bd9f75',
          500: '#d6c4aa',
          600: '#decfba',
          700: '#e6dbcb',
          800: '#eee7dd',
          900: '#f7f3ee'
        },
        'columbia-blue': {
          DEFAULT: '#BDD9E6',
          100: '#17313d',
          200: '#2e6179',
          300: '#4592b6',
          400: '#80b6cf',
          500: '#bdd9e6',
          600: '#cae0eb',
          700: '#d7e8f0',
          800: '#e4f0f5',
          900: '#f2f7fa'
        },
        'reseda-green': {
          DEFAULT: '#726D44',
          100: '#17160e',
          200: '#2e2c1c',
          300: '#454229',
          400: '#5c5837',
          500: '#726d44',
          600: '#9c945d',
          700: '#b6b085',
          800: '#cecaad',
          900: '#e7e5d6'
        }
      }
    }
  },
  plugins: [],
};
