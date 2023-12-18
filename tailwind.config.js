/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#0068ff",
                  
          "secondary": "#00c000",
                  
          "accent": "#008600",
                  
          "neutral": "#140200",
                  
          "base-100": "#fff4ff",
                  
          "info": "#25c5ff",
                  
          "success": "#00e079",
                  
          "warning": "#ff9700",
                  
          "error": "#c03049",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}