/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "grey":"#6B7280",
        "light-blue":"#346CC4",
        "grey-text":"#808080",
        "primary-blue":"#0C4DA8",
        "background-blue": "#F6F9FD",
        'heading-grey': '#3C3C3C',
        'divider-grey' : '#E6E6E6'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
