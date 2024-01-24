/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				springBud: '#9dff00' /* lime green */,
				mineShaft: '#313131' /* dark gray */,
				black: '#000000' /* black */,
				white: '#ffffff' /* white */,
			}
		},
		fontFamily: {
			sans: ['Space Mono', 'monospace']
		}
	},
	plugins: [],
}
