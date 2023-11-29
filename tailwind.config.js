/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4710C1",
        secondary: "#7857FF",
        tertiary: "#819BFD",
        accent: "#FC9442",
      },
      fontFamily: {
        roboto: ["Roboto Flex", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4710C1",
          secondary: "#7857FF",
          tertiary: "#819BFD",
          accent: "#FC9442",
          neutral: "#C9C9C9",
          "base-100": "#ffff",
          info: "#3abff8",
          success: "#0FA958",
          warning: "#FFC700",
          error: "#CF3342",
        },
      },
    ],
    base: false,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
}
