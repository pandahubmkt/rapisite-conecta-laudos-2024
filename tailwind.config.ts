import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        conecta: {
          orange: "#F57E29",
          "orange-light": "#FFFAF5",
          "orange-dark": "#D6661E",
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            600: "#4B5563",
            900: "#111827",
          }
        },
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(245, 126, 41, 0.1)',
        'premium-hover': '0 20px 50px -12px rgba(245, 126, 41, 0.2)',
      }
    },
  },
  plugins: [],
};
export default config;
