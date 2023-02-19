module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#03A9F4',
        secondary: '#FFC107',
        error: '#F44336',
        black: '#000000',
        orange: '#FFB74D',
        green: '#4CAF50',
        purple: '#F2E9FF',
        white: '#FFFFFF',
      },
      screens: {
        lg: '1366px',
        xl: '1960px',
      },
    },
  },
  plugins: [],
};
