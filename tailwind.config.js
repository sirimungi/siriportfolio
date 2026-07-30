/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          soft: "#2A3447",
          mute: "#5C6B7A",
        },
        mist: {
          DEFAULT: "#E8EEF2",
          deep: "#D5DEE6",
          wash: "#F3F6F8",
        },
        teal: {
          DEFAULT: "#0F6B63",
          bright: "#148F84",
          soft: "#D7F0EC",
        },
        chalk: "#FAFBFC",
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      fontSize: {
        "display": ["clamp(3.5rem, 12vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline": ["clamp(1.75rem, 4vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
      },
      maxWidth: {
        content: "72rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "line-draw": "lineDraw 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        lineDraw: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
}
