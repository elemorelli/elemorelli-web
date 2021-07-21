module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: 'jit',
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
        sans: [
          "Nunito",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
