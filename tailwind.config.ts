import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important:true,
  theme: {
    extend: {
      screens: {
        sm: '640px',  // All in px
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
} satisfies Config;
