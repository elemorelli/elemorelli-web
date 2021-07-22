const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%": { opacity: 0 },
          "40%": { opacity: 0 },
          "60%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        blink: "blink .5s linear infinite alternate",
      },
      backgroundImage: () => ({
        hero: "url('/images/hero.jpg')",
      }),
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
