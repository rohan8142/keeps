import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // other paths
  ],
  theme: {
    extend: {
      // your custom extensions
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff", // Set your desired background color here
          // Add other theme settings as needed
        },
      },
      // other themes if needed
    ],
  },
}


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-color': '#ffffff', // Replace with your color,
      },
    },
  },
  plugins: [
    require('daisyui'),
    
  ],
};
export default config;
