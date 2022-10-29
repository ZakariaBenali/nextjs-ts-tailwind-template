module.exports = {
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	extends: ['next/core-web-vitals', 'eslint:recommended'],
	plugins: ['@typescript-eslint'],
	rules: {
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		curly: 'error',
		'import/no-default-export': 1,
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
		'no-use-before-define': ['error', { classes: false, functions: false }],
		'no-console': 'warn',
		'@typescript-eslint/no-shadow': ['error'],
		semi: ['error', 'always'],
		'react/jsx-max-props-per-line': ['warn', { maximum: 2, when: 'multiline' }],
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'@typescript-eslint/no-unused-expressions': 'error',
		'arrow-parens': 'error',
	},
	overrides: [
		{
			files: ['src/pages/**/*.{tsx,ts}'],
			rules: {
				'import/no-default-export': 0,
			},
		},
	],
};
