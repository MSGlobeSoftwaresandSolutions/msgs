import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#070B17",
          surface: "#0F172A",
          surfaceHover: "#1E293B",
          card: "rgba(15, 23, 42, 0.75)",
          cardBorder: "rgba(56, 189, 248, 0.15)",
          blue: "#2563EB",
          cyan: "#22D3EE",
          violet: "#A78BFA",
          text: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.25) 0%, rgba(34, 211, 238, 0.12) 35%, transparent 70%)",
        "mesh-pattern": "radial-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(37, 99, 235, 0.3)",
        "glow-cyan": "0 0 35px -5px rgba(34, 211, 238, 0.35)",
        "glow-violet": "0 0 35px -5px rgba(167, 139, 250, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spin-reverse 35s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 15px rgba(37,99,235,0.4))" },
          "100%": { opacity: "0.8", filter: "drop-shadow(0 0 30px rgba(34,211,238,0.7))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
