module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#d81e5b',
      secondary: '#8c38ff',
      dark: '#131a26',
      light: '#eee',
      white: '#fff',
      spanColor: '#888'
    },
    fontFamily: {
      'body': ['"Fira Sans"']
    },
    maxWidth: {
      '400px': '400px',
      '33-per': '33.3333%'
    },
    borderRadius: {
      '16px': '16px'
    },
    flex: {
      '1': '1 1 0%',
      '1-33': '1 1 33.333333%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
