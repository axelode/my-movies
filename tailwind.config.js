/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s linear infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black", "bumblebee"],
  },
}