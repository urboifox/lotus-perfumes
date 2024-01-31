import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#000000",
        background: "#ffffff",
        primary: "#f66767",
        secondary: "#ff9999",
      },
      fontSize: {
        tiny: "0.7rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#ffffff",
            primary: "#f66767",
            secondary: "#ff9999",
          },
        },
      },
    }),
  ],
};
export default config;
