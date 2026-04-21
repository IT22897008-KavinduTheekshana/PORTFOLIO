import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#020209",
        "bg-secondary": "#06060f",
        "accent-purple": "#7c3aed",
        "accent-cyan": "#06b6d4",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-reverse": "spin 18s linear infinite reverse",
        float: "floatY 4s ease-in-out infinite",
        "float-slow": "floatY 6s ease-in-out infinite",
        "float-offset": "floatY 4s ease-in-out 1.5s infinite",
        "float-offset2": "floatY 5s ease-in-out 0.8s infinite",
        "float-offset3": "floatY 4.5s ease-in-out 2s infinite",
        blink: "blink 1.1s step-end infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(124,58,237,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(124,58,237,0.6), 0 0 80px rgba(6,182,212,0.2)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
