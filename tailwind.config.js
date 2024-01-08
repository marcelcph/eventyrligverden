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
        
          "primary": "#0F0F0F", //  farve til knapper og sektion bagrund
                  
          "secondary": "#fcfcfc", // farve  til knapper og sektion bagrund

          "accent": "#E0C0D3", // farve til knapper og sektion
                  
          "neutral": "#000000", // tekst farve
                  
          "neutral-content": "#f3f4f6", // tekst farve 

          "base-100": "#f3f4f6", // tekst farve 
                  
          "info": "#3b82f6", // farve  til info designs
                  
          "success": "#4ade80", // farve til success designs
                  
          "warning": "#f43f5e", // farve til warnings designs
                  
          "error": "#57534e", // farve til errors designs
        },
        
      },
      "light", "dark", "luxury",
    ],
  },
  plugins: [require("daisyui")],
}