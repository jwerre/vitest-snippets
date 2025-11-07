import jsonc from 'eslint-plugin-jsonc';

export default [
	// Apply the flat configs
	...jsonc.configs['flat/recommended-with-json'],
	{
		files: ['**/*.json'],
		rules: {
			// Override with stricter formatting rules
			'jsonc/indent': ['error', 'tab'],
			'jsonc/object-curly-spacing': ['error', 'always'],
			'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
			'jsonc/comma-dangle': ['error', 'never'],
			'jsonc/quotes': ['error', 'double'],
			'jsonc/quote-props': ['error', 'always'],
			'jsonc/object-property-newline': [
				'error',
				{ allowAllPropertiesOnSameLine: false },
			],
			'jsonc/array-bracket-spacing': ['error', 'never'],
			'jsonc/array-element-newline': ['error', 'consistent'],
		},
	},
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				console: 'readonly',
				process: 'readonly',
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'off',
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
		},
	},
];
