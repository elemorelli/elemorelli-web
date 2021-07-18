module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
