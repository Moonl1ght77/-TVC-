import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f2e8",
        ink: "#25231f",
        muted: "#746f66",
        line: "#d9cdb9",
        note: "#fff3ba",
        moss: "#4f5f46",
        cinnabar: "#9a4c3a"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        paper: "0 18px 60px rgba(57, 47, 32, 0.12)",
        note: "0 10px 28px rgba(81, 65, 32, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
