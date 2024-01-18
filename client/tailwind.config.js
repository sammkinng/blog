module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700_4c: "#ffffff4c", A700: "#ffffff" },
        gray: {
          50: "#f9f5ff",
          100: "#f2f3f6",
          900: "#0f1728",
          "50_01": "#fdf1f9",
          "50_02": "#f8f9fb",
          "900_0c": "#1018280c",
          "900_23": "#0f172823",
          "900_07": "#10182807",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#cfd4dc",
          300: "#98a1b2",
          500: "#667084",
          800: "#344053",
        },
        deep_purple: {
          50: "#e9d7fe",
          100: "#d6bbfb",
          400: "#7e56d8",
          500: "#6840c6",
        },
        black: { "900_00": "#00000000", "900_66": "#00000066" },
        teal: { 800: "#027947" },
        pink: { A700: "#c01573" },
        purple: { 50: "#f4ebff", 900: "#422f7d" },
        blue: { 50: "#eef3ff" },
        light_green: { 50: "#ebfdf2" },
        indigo: { 500: "#3537cc" },
      },
      boxShadow: {
        bs: "0px 1px  2px 0px #1018280c",
        bs1: "0px 4px  6px -2px #10182807",
        bs2: "0px 32px  64px -12px #0f172823",
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000000,#00000066)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
