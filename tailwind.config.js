/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {     
      colors: {
        "primary": "#11998e",
        "secondary": "#151515",
        "text": "#808080",
        "accent": "#38ef7d",
        "green-600": "#0c544e",
        "cyan-400": "#8aedea",
        "section-cyan": "#f2fdfc",
      },
      fontFamily: {
        poppins: ["Inter", "sans-serif"],
      },
      backgroundImage:{
        "hero_bg_1": "url(../assets/hero_section_bg_1.png)",
        "hero_bg_2": "url(../assets/hero_section_bg_2.png)",
        "hero_img_bg": "url('../assets/hero_image_bg.png')",
        "shorten-desktop": "url('./assets/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('./assets/bg-shorten-mobile.svg')",
        "hero-image": "url('./src/assets/illustration-working.svg')",
      },
      boxShadow: {
        'custom': '0px 0px 25px 2px #fff',
        'characteristic': '0px 0px 5px 2px #808080',
        'card': '0px 0px 2px 2px #808080',
      },
  },
  },
  plugins: [],
}

