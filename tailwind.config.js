/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        gray: "#747474",
        primary: "#5F6A95",
        secondary: "#000033",
        lightgray: "#D1D1D1",
        oldlightgray: "#EFF0F4",
      },
      fontFamily: {
        pop: ["var(--font-pop)"],
        orb: ["var(--font-orb)"],
      },
      screens: {
        sxl: "1180px",
      },
    },
  },
  plugins: [],
};
