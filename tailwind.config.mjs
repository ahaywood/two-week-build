/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'arrowInterior': "url('/images/arrow--interior.svg')",
				'arrowAuth': "url('/images/arrow--auth.svg')",
			},
			backgroundPosition: {
				'arrowInterior': 'left 100px',
				'arrowAuth': '120% 65px',
			},
			colors: {
				springBud: '#9dff00' /* lime green */,
				mineShaft: '#313131' /* dark gray */,
				black: '#000000' /* black */,
				white: '#ffffff' /* white */,
				battleshipGray: '#828282', /* medium gray */
				mountainMist: '#949494',
			},
			padding: {
				page: '32px'
			}
		},
		fontFamily: {
			mono: ['Space Mono', 'monospace'],
			sans: ['Space Grotesk', 'sans-serif']
		}
	},
	plugins: [],
}
