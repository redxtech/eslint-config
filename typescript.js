const { join } = require('path')

export default {
	extends: [
		join(__dirname, 'index.js'),
		'plugin:import/typescript',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
		'prettier/unicorn',
		'prettier/standard',
		'prettier/@typescript-eslint'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: ['.json']
	},
	plugins: ['@typescript-eslint']
}
