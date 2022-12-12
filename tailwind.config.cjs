module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',

        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        backgroundColor: {
          bgexemple: '#272727',
        },
      },
      backgroundImage: {
        'title-gradient':
          'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) ',
        'discount-gradient':
          'linear-gradient(125.17deg, #272727 0%, #11101D 100%);',
        'blue-gradient':
          'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
      },
      'white-gradient': ' background: rgba(255, 255, 255, 0.6)',
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: false,
    },
  },
};
