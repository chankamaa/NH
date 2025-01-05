module.exports = {
  important: true, // Makes Tailwind styles globally important
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        beige: '#faf9f8',
        darkGreen: '#224229',
        lightGreen: '#518b22',
      }
    },
  },
  plugins: [],
};
