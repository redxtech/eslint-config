module.exports = {
	rules: {
		'sort-imports': 'off',
		'import/order': 'off',
		'simple-import-sort/sort': 'error',
		'optimize-regex/optimize-regex': 'warn',
		'no-secrets/no-secrets': 'error'
	},
	settings: {
		'json/json-with-comments-files': []
	},
	plugins: [
		'import',
		'node',
		'promise',
		'json-format',
		'eslint-comments',
		'no-use-extend-native',
		'sonarjs',
		'lodash',
		'optimize-regex',
		'simple-import-sort',
		'perf-standard',
		'no-secrets',
		'security',
		'unicorn',
		'standard'
	],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:node/recommended',
		'plugin:promise/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:no-use-extend-native/recommended',
		'plugin:sonarjs/recommended',
		'plugin:lodash/recommended',
		'perf-standard',
		'plugin:security/recommended',
		'plugin:unicorn/recommended',
		'standard',
		'prettier',
		'prettier/unicorn',
		'prettier/standard',
	]
}
