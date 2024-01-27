/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'arrowInterior': "url('/images/arrow--interior.svg')",
				'arrowAuth': "url('/images/arrow--auth.svg')",
				'arrowProfile': "url('/images/arrow--profile.svg')",
				'frame': "url('/images/frame.svg')",
			},
			backgroundPosition: {
				'arrowInterior': 'left 100px',
				'arrowAuth': '120% 65px',
			},
			backgroundSize: {
				'full': '100% 100%'
			},
			borderWidth: {
				1: '1px',
				3: '3px',
			},
			colors: {
				springBud: '#9dff00' /* lime green */,
				mineShaft: '#313131' /* dark gray */,
				black: '#000000' /* black */,
				white: '#ffffff' /* white */,
				battleshipGray: '#828282', /* medium gray */
				mountainMist: '#949494' /* medium gray */,
				licorice: '#141414', /* almost black */
				codGray: '#2f2f2f', /* dark gray */
				chicago: '#5e5e5e',
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
