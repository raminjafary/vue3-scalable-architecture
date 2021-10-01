module.exports = {
	extends: ['stylelint-config-standard'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
					'mixin',
					'extend',
					'include',
				],
			},
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep'],
			},
		],
	},
}
