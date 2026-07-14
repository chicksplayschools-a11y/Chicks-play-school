/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9673A6',
        secondary: '#FF9A8A',
        accent: '#FFB300',
        background: '#FFFDF7',
        text: '#333333',
      },
      fontFamily: {
        heading: ['"Baloo Bhai 2"', 'cursive'],
        body: ['"Unkempt"', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'card': '0 15px 50px rgba(0,0,0,.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        scroll: 'scroll 40s linear infinite',
      }
    },
  },
  plugins: [],
}
