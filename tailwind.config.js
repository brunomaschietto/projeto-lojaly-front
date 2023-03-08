/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: (theme) => theme("colors"),
    textColor: {
      primary: "#02B6D7",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#02B6D7",
      secondary: "#f0f1ec",
      danger: "#e3342f",
    }),
  },
  plugins: [],
}