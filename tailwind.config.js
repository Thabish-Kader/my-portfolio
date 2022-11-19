/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		fontFamily: {
			terminal: ["VT323", "monospace"],
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
