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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        gold2: '#FAF9F2',
        gold8: '#B9A88D',
        gold10: '#8C7A5E',
        gold12: '#3B352B',
      },
      textColor: {
        gold10: '#8C7A5E',
        gold8: '#B9A88D',
        gold2: '#FAF9F2',
      },
      borderColor: {
        gold8: '#B9A88D',
      },
    },
  },
  plugins: [],
};
export default config;
