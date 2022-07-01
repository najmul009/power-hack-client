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
          accent: "#122333",
          neutral: "#2eaed3",
          "cardColor": "#182B3C",
          headColor: "#1E384E",
          "base-100": "#ffffff",
          "me-100":"#000000"
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
