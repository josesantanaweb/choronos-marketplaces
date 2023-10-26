import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
    },
    transitionTimingFunction: {
      DEFAULT: "linear",
    },
    screens: {
      xxs: "320px",

      xs: "480px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      lgMax: "1168px",
      // => @media (min-width: 1168px) { ... }

      xl: "1256px",
      // => @media (min-width: 1280px) { ... }

      "1xl": "1651px",
      // => @media (min-width: 1651px) { ... }

      "2xl": "1701px",
      // => @media (min-width: 1701px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      md: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      backgroundImage: {
        homebg1: "url('/images/bg.png')",
        homebg2: "url('/images/bg-2.png')",
        "gradient-purple-100":
          "linear-gradient(68deg, #3F4AB3 0%, #7A64D0 100%)",
        "gradient-purple-200":
          "linear-gradient(68deg, #7A64D0 0%, #4C50B9 100%)",
        "gradient-gray-100":
          "linear-gradient(180deg, rgba(53, 49, 71, 0) 0%, rgba(53, 49, 71, 0.73) 29.17%)",
      },
      colors: {
        "purple-dark-100": "#443f65",
        "purple-dark-200": "#443C60",
        "purple-dark-300": "#3b3453",
        "purple-dark-400": "#312B45",
        "purple-dark-500": "#312C43",
        "purple-dark-600": "#2B273A",
        "purple-dark-700": "#221E30",
        "purple-dark-800": "#151421",
        "purple-dark-900": "#1B1826",
        "purple-violet-100": "#535992",
        "purple-chronos": "#494FB8",
        "purple-light": "#7562CE",
        "blue-chronos-100": "#7562CE",
        "blue-chronos-800": "#535992",
        "blue-chronos-900": "#383D69",
        alert: "#FF2A5F",
        success: "#55FFAD",
      },
      borderRadius: {
        "15": "15px",
        "20": "20px",
      },
      keyframes: {
        loadingDotsTyping: {
          "0%": {
            "box-shadow":
              "9979px 0 0 0 #fff, 9999px 0 0 0 #fff, 10019px 0 0 0 #fff",
          },
          "16.667%": {
            "box-shadow":
              "9979px -7px 0 0 #fff, 9999px 0 0 0 #fff, 10019px 0 0 0 #fff",
          },
          "50%": {
            "box-shadow":
              "9979px 0 0 0 #fff, 9999px -7px 0 0 #fff, 10019px 0 0 0 #fff",
          },
          "83.333%": {
            "box-shadow":
              "9979px 0 0 0 #fff, 9999px 0 0 0 #fff, 10019px -7px 0 0 #fff",
          },
          "100%": {
            "box-shadow":
              "9979px 0 0 0 #fff, 9999px 0 0 0 #fff, 10019px 0 0 0 #fff",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
