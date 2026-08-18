/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					primary: "#3b82f6", // Blue
					secondary: "#eab308", // Yellow
				}
			}
		],
		darkTheme: "dark",
		logs: false,
	  }
}
