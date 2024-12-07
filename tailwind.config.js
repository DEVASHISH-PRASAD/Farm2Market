/** @type {import('tailwindcss').Config} */

// tailwind.config.js
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/daisyui/dist/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [require("daisyui")];
export const daisyui = {
  themes: ["light", "dark"], // you can add more themes here
};
