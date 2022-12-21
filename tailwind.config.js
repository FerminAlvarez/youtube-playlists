/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      variants: {
        height: ["hover"],
      },
    },
  },
  plugins: [require("daisyui")],
};
