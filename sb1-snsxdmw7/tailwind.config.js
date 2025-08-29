/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mint-green': {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        'charcoal': {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        'cream': {
          50: '#FFF8DC',
          100: '#FFF5B7',
          200: '#FFF2A0',
          300: '#FFEF89',
          400: '#FFEC72',
          500: '#FFE95B',
          600: '#E6D052',
          700: '#CCB749',
          800: '#B39E40',
          900: '#998537',
        },
        'blue': {
          50: '#EBF8FF',
          100: '#BEE3F8',
          200: '#90CDF4',
          300: '#63B3ED',
          400: '#4299E1',
          500: '#3182CE',
          600: '#2B77CB',
          700: '#2C5AA0',
          800: '#2A4365',
          900: '#1A365D',
        }
      },
      fontFamily: {
        'handwritten': ['Comic Sans MS', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-in': 'slide-in 0.3s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(144, 229, 163, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(144, 229, 163, 0.8)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(56, 189, 248, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};