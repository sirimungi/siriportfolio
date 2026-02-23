/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        paper: "#F5F5F0",
        beige: {
          light: "#E8DCC4",
          DEFAULT: "#D4C4B0",
          dark: "#C4B4A0",
        },
        dusty: {
          light: "#A89B8E",
          DEFAULT: "#9B8B7E",
          dark: "#8A7A6D",
        },
        lavender: {
          light: "#C8B9E4",
          DEFAULT: "#B8A9D4",
          dark: "#9B88B8",
        },
        // Dark mode colors
        overcast: {
          light: "#3D4E60",
          DEFAULT: "#2C3E50",
          dark: "#1A2530",
        },
        // Shared/accent colors
        accent: {
          light: "#C8B9E4",
          DEFAULT: "#B8A9D4",
          dark: "#9B88B8",
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(255, 107, 53, 0.5)' },
          '100%': { 'box-shadow': '0 0 40px rgba(255, 133, 85, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
