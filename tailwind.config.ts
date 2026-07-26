import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0D1210",
        surface: "#141B18",
        raised: "#1B2420",
        line: "#2A3530",
        ink: "#E9ECE7",
        muted: "#93A199",
        amber: "#F2B84B",
        sage: "#6FA98D",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
