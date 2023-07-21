/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "960px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        main:"#141414",
        heder_menu: {
          active: "#60F9D8",
          unactive: "#FFF",
        },
      },
     
    },
  },
  plugins: [],
};
