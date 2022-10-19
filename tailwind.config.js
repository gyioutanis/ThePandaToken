module.exports = {
  purge: {
    enabled: true,
    content: ['*.php', 'assets/js/header-scripts.js', 'assets/js/footer-scripts.js'],
    options: {
      safelist: ['fixed', 'overflow-hidden', 'blur'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
