/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          darkest: "#020c1b",
          dark: "#0a192f",
          DEFAULT: "#112240",
          light: "#233554",
        },
        slate: {
          lightest: "#ccd6f6",
          light: "#a8b2d1",
          DEFAULT: "#8892b0",
          dark: "#495670",
        },
        green: {
          DEFAULT: "#64ffda",
          tint: "rgba(100, 255, 218, 0.1)",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1000px",
      },
    },
  },
  plugins: [],
}
