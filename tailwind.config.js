/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        experstheme: {
          primary: "#0C0634",
          secondary: "#ffffff",
          accent: "#3A4256",
          neutral: "#2eaed3",
          "base-100": "#ffffff",
          "me-100":"#000000"
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
