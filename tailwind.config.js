module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          normal: '#000000',
          'see-through': 'rgb(0, 0, 0,0.3)',
        },
        white: '#ffffff',
        orange: {
          dark: '#ff4000',
        },
      },
      width: {
        13: '3.25rem',
        17: '4.25rem',
        '17vw': '17vw',
        '20vw': '20vw',
        '40vw': '40vw',
        '45vw': '45vw',
        '50vw': '50vw',
        '48%': '48%',
      },
      height: {
        0.5: '0.5px',
        13: '3.25rem',
        17: '4.25rem',
        '50vh': '90vh',
        '100vh-16': 'calc(100vh - 60px)',
        '17vw': '17vw',
        '20vw': '20vw',
        '40vw': '40vw',
      },
      inset: {},
      boxShadow: {
        red: '0px 0px 7px rgba(255, 64, 0, 0.9)',
        'red-thicker': '0px 0px 14px rgba(255, 64, 0, 0.9)',
        'black-blur': '0px 0px 16px 10px rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        roboto: ['"Roboto"'],
      },
    },
  },
  variants: {
    extend: { brightness: ['hover', 'focus'] },
  },
  plugins: [],
}
