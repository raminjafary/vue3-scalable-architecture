export default {
	mode: 'jit',
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	content: ['./public/**/*.html', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
