const { join } = require('path')

export default {
	extends: [
		join(__dirname, 'index.js'),
		'plugin:vue/vue3-recommended',
		'prettier',
		'prettier/unicorn',
		'prettier/standard',
		'prettier/vue'
	],
	plugins: ['vue']
}
