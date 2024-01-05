/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // https://daisyui.com/theme-generator/ lav dit eget tema og sæt ind
  daisyui: {
    themes: [  
      {
        mytheme: {
        
          "primary": "#0F0F0F", //  farve sort designet til knapper og sektion bagrund
                  
          "secondary": "#F4EFEF", // farve hvid designet til knapper og sektion bagrund

          "accent": "#E0C0D3", // farve lyserød designet til knapper og sektion
                  
          "neutral": "#000000", // tekst farve sort
                  
          "neutral-content": "#f3f4f6", // tekst farve hvid

          "base-100": "#f3f4f6", // tekst farve grå
                  
          "info": "#3b82f6", // farve blå til info designs
                  
          "success": "#4ade80", // farve grøn til success designs
                  
          "warning": "#f43f5e", // farve rød til warnings designs
                  
          "error": "#57534e", // farve mørke grå til errors designs
        },
        
      },
      "light", "dark", "luxury",
    ],
  },
  plugins: [require("daisyui")],
}