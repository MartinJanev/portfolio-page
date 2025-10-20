import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { green: "#22c55e", purple: "#8b5cf6" },
        theme: {
          bg: {
            primary: "var(--bg-primary)",
            secondary: "var(--bg-secondary)",
            tertiary: "var(--bg-tertiary)",
          },
          text: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            muted: "var(--text-muted)",
          },
          accent: {
            green: "var(--accent-green)",
            purple: "var(--accent-purple)",
          },
          border: "var(--border-color)",
          card: {
            bg: "var(--card-bg)",
            hover: "var(--card-hover)",
          },
        },
      },
      boxShadow: { card: "0 4px 16px rgba(59,130,246,0.20)" },
      keyframes: {
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: { gradient: "gradient 6s ease infinite" },
    },
  },
  plugins: [],
} satisfies Config;
