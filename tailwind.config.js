/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', ],
  theme: {
    extend: {
      colors: {
        primary: "#7ec5f7"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "1rem",
      center: true,
    },
    screen: {
      sm: "640px",
      md: "768px",
    }
  },
  plugins: [],
}

