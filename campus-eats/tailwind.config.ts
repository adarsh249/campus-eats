import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-page-image": "url('/assets/images/landing-page.jpg')",
      },
    },
  },
  plugins: [
    function({addUtilities}: { addUtilities: Function }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarcolor: 'rgba(155, 155, 155, 0.5) rgba(255, 255, 255, 0.5)',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(155, 155, 155, 0.5)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '20px',
            border: '1px solid white',
          },
        },
      }
  
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
export default config;
