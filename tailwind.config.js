/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Caveat: ["Caveat", "cursive"],
      Comfortaa: ["Comfortaa", "cursive"],
      Cinzel: ["Cinzel", "serif"],
      SyneMono: ["Syne Mono", "cursive"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
