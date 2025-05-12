// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // update based on your project
  ],
  theme: {
    extend: {
      fontFamily: {
        bevan: ['Bevan', 'cursive'],
        homemade: ['"Homemade Apple"', 'cursive'],
        leckerli: ['"Leckerli One"', 'cursive'],
      },
    },
  },
  plugins: [],
}
