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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'Jura': ['Jura', 'sans-serif'],
      },
      screens: {
        'ms': '900px',
        '3xl': '1600px',
      },
      borderWidth: {
        '3': '3px', // Adds a 3px border width
        '5': '5px', // Adds a 5px border width
        '10': '10px', // Adds a 10px border width
      },
    },
  },
  colors: {
     'majority-red': '#dc2626'
  },
  plugins: [],
};
