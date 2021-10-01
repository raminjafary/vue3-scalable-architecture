module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
	],
	rules: {
		'vue/require-default-prop': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
}
