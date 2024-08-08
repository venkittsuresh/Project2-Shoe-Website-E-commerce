module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjusted file paths
  ],
  theme: {
    extend: {
      fontFamily: {
        ceviche: ['Ceviche One', 'system-ui'],
        freckle: ['Freckle Face', 'system-ui'],
        zilla: ['Zilla Slab Highlight', 'serif'],
        caveat: ['Caveat', 'cursive'], 
        'waiting-for-the-sunrise': ['Waiting for the Sunrise', 'cursive'], 
      },
    },
  },
  plugins: [],
};
