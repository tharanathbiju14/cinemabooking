/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{html,js,jsx}', // Include .jsx files in the pages folder
  './src/components/**/*.{html,js,jsx}', // Include .jsx files in the components folder
  './src/**/*.{html,js,jsx}', // Include all relevant files in src
  './public/index.html', // Include the main HTML file
];
export const theme = {
  extend: {},
};
export const plugins = [];

