/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./_components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Metal / Industrial Greys
				metal: {
					50: '#F3F4F5',
					100: '#E5E7EB',
					200: '#C8CBD0',
					300: '#A9AEB5',
					400: '#8A9099',
					500: '#6C737D',     // mid steel
					600: '#52585F',
					700: '#3E4349',
					800: '#2A2D31',     // dark workshop steel
					900: '#1A1C1F',     // almost-black steel
					950: '#131416'
				},

				brand: {
					yellow: '#F5C400',
					steel: '#2A2D31',
					black: '#2A2A2A',
					white: '#FAFAFA'
				},


				// Hazard Yellow
				hazard: {
					50: '#FFF9D6',
					100: '#FFF3AD',
					200: '#FFE76A',
					300: '#FFD826',
					400: '#F5C400',     // main yellow
					500: '#D0A900',
					600: '#AC8D00',
					700: '#876F00',
					800: '#615100',
					900: '#3B3100',
					950: '#231C00',
					DEFAULT: '#F5C400',
				},

				// Matte Black (for stripes, borders, text)
				ink: {
					50: '#E5E5E5',
					100: '#CACACA',
					200: '#A1A1A1',
					300: '#787878',
					400: '#4F4F4F',
					500: '#2A2A2A',     // main stripe black (not pure black)
					600: '#1F1F1F',
					700: '#151515',
					800: '#0C0C0C',
					900: '#050505'
				},

				// Rust Accent (optional but very on-theme)
				rust: {
					50: '#F6EDE6',
					100: '#EDD9CC',
					200: '#DBB4A0',
					300: '#C98F74',
					400: '#B56B48',
					500: '#A24D2B',     // main rust
					600: '#823C22',
					700: '#632C19',
					800: '#441D11',
					900: '#2A120A'
				},

				// Clean content background
				paper: {
					50: '#FFFFFF',
					100: '#FAFAFA',
					200: '#F5F5F5'
				}
			}
		}

	},

	plugins: [],
};
