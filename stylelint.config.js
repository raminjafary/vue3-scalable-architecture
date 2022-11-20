module.exports = {
	extends: ['stylelint-config-html/vue', 'stylelint-config-standard'],
	rules: {
		indentation: 2,
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
		'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: [] }],
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'deep'] }],
	},
}
