/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dev-background": "#F5F5F5",
        "dev-to-card-color": "#FFFFFF",
        "button-color": "#2F3AB2",
      },
    },
  },
  plugins: [],
};
