/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        streamster: ["streamster", ...defaultTheme.fontFamily.sans],
        metro: ["metropolis", ...defaultTheme.fontFamily.sans],
        consolas: ["consolas", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        synth: ["0 0 2px #fff", "0 0 6px #fff", "0 0 8px #DC2626", "0 0 10px #DC2626"],
      },
      animation: {
        neon: "neon 1.7s infinite alternate",
        "neon-reverse": "neon 1.7s infinite alternate-reverse",
        gridz: "gridz 1s infinite linear",
      },
      keyframes: {
        neon: {
          "0%, 18%, 22%, 26%, 58%, 62%, 100%": {
            "text-shadow": ["0 0 2px #fff", "0 0 6px #fff", "0 0 8px #DC2626", "0 0 10px #DC2626"],
          },
          "20%, 24%, 60%": { "text-shadow": "none" },
        },
        gridz: {
          "100%": {
            transform: "perspective(60vh) rotateX(75deg) translateY(6.25vh)",
          },
        },
      },
      gridTemplateRows: {
        floor: "repeat(16,1fr)",
      },
      gridTemplateColumns: {
        floor: "repeat(40,1fr)",
      },
      blur: {
        xs: "1px",
      },
    },
  },
  safelist: ["w-px", "h-px", "bg-white", "absolute"],
  plugins: [],
};
