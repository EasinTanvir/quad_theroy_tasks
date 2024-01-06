/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        bodyColor: "#EEEFF0",
        inputBox: "#FEFEFE",
        icon: "#FD6011",
        navText: "#12273D",
        bannerColor: "#F99F1C",
        bannerColor2: "#FD9460",
      },
      screens: {
        xs: "450px",
        mid: "876px",
      },
      width: {
        inputWidth: "450px",
        inputWidth2: "520px",
        modalWidth: "550px",
      },
      borderRadius: {
        rad: "32px",
      },
    },
  },
  plugins: [],
};
