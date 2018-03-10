module.exports = {
  /*
  ** Global CSS
  */
  css: [
    'buefy/lib/buefy.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],

  /*
  ** Add buefy in our app, see plugins/buefy.js file
  */
  plugins: [
    '@/plugins/buefy'
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  }
}