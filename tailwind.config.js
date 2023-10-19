/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        titleFont: 'Roboto',
        bodyFont: 'Lato',
      },
      colors: {
        m_blue: '#436995',
        d_light: '#232F3E',
        b_yellow: '#febd69',
        whiteText: '#fff',
        footerBottom: '#131A22',
      },
      boxShadow: {
        textShadow: '0px 0px 32px 1px rgba(199,199,199,1)',
        boxInput: '0px 0px 3px 2px rgba(228 121 17 / 50%)',
      },
    },
  },
  plugins: [],
};
