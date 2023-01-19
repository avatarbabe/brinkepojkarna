/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: 'Open Sans',
			body: ['"Open Sans"'],
		},
	},
	plugins: [require("@tailwindcss/typography"),],
}
