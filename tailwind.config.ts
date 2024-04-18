import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "nav-rect": "url('/background/nav-rectangle.svg')",
      },
      colors: {
        "primary-blue": "#1E1E44",
        "primary-cyan": "#00B4F0",
        "primary-purple": "#7855FF",
        haze: "#F3F5F9",
        "primary-grey": "#7A7A7A",
      },
      animation: {
        running: "swipe 10000ms linear infinite backwards",
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        swipe: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-100%)" },
        },
      },
      fontFamily: {
        kanit: ["Kanit", ...fontFamily.sans],
        "public-sans": ["Public Sans", ...fontFamily.sans],
        "proxima-nova": ["Proxima Nova", ...fontFamily.sans]
      },
      screens: {
        "smx": "376px",
        "xs": "426px",
        "1xl": "1440px",
        "3xl": "1715px",
      },
    },
  },
  plugins: [],
};
export default config;
