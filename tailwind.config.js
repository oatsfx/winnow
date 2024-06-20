/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      fontFamily: {
        sans: ["Overused\\ Grotesk", "sans-serif"],
        display: ["Unbounded", "Overused\\ Grotesk"],
        emblem: ["Neue Haas"],
        symbol: ["Symbols"],
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        nightwing: {
          primary: "#ffffff",
          "primary-focus": "#e6e6e6",
          "primary-content": "#000000",
          secondary: "#6491a2",
          "secondary-focus": "#324d57",
          "secondary-content": "#ffffff",
          accent: "#924d57",
          "accent-focus": "#6f3a42",
          "accent-content": "#ffffff",
          neutral: "#171618",
          "neutral-focus": "#2e2d2f",
          "neutral-content": "#80ccbf",
          "base-100": "#151a19",
          "base-200": "#2b4541",
          "base-300": "#457069",
          "base-content": "#c0f4eb",
          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",
        },
        Theme1: {
          primary: "#ffb3d9",
          "primary-content": "#1b1c22",
          secondary: "#b9ffb3",
          accent: "#ffffb3",
          neutral: "#22212c",
          "base-100": "#302f3d",
          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
