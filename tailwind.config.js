/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#101820",
          soft: "#2C3A47",
          mute: "#667788",
        },
        paper: {
          DEFAULT: "#F2F5F7",
          deep: "#E4EAEF",
        },
        signal: {
          DEFAULT: "#0C7C74",
          bright: "#12A396",
          wash: "#C8EDE9",
        },
        chalk: "#F8FAFB",
        night: "#0A1018",
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      fontSize: {
        display: [
          "clamp(3.75rem, 13vw, 9rem)",
          { lineHeight: "0.88", letterSpacing: "-0.045em", fontWeight: "800" },
        ],
        headline: [
          "clamp(1.85rem, 4.5vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
      },
      maxWidth: {
        content: "74rem",
      },
    },
  },
  plugins: [],
}
