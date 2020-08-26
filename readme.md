# @gabedunn/eslint-config
> My personal eslint configuration.

This is my curated eslint configuration.

## Installation
```shell script
yarn add -D eslint @gabedunn/eslint-config eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-json-format eslint-plugin-eslint-comments eslint-plugin-no-use-extend-native eslint-plugin-sonarjs eslint-plugin-perf-standard eslint-config-perf-standard eslint-plugin-optimize-regex eslint-plugin-simple-import-sort eslint-plugin-no-secrets eslint-plugin-security eslint-plugin-unicorn eslint-plugin-standard eslint-config-prettier
# OR
npm i -D eslint @gabedunn/eslint-config eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-json-format eslint-plugin-eslint-comments eslint-plugin-no-use-extend-native eslint-plugin-sonarjs eslint-plugin-perf-standard eslint-config-perf-standard eslint-plugin-optimize-regex eslint-plugin-simple-import-sort eslint-plugin-no-secrets eslint-plugin-security eslint-plugin-unicorn eslint-plugin-standard eslint-config-prettier
```

## Configs
- [`eslint:recommended`][eslint-rec]
- [`plugin:import/errors`][import-config]
- [`plugin:import/warnings`][import-config]
- [`plugin:node/recommended`][node-config]
- [`plugin:promise/recommended`][promise-config]
- [`plugin:eslint-comments/recommended`][comments-config]
- [`plugin:no-use-extend-native/recommended`][no-extend-native-config]
- [`plugin:sonarjs/recommended`][sonarjs-config]
- [`plugin:lodash/recommended`][lodash-config]
- [`perf-standard`][perf-standard]
- [`plugin:security/recommended`][security-config]
- [`plugin:unicorn/recommended`][unicorn-config]
- [`standard`][standard-config]
- [`prettier`][prettier-config]
- [`prettier/unicorn`][prettier-config]
- [`prettier/standard`][prettier-config]
	
 
## Plugins
- [`import`][import]
- [`node`][node]
- [`promise`][promise]
- [`json-format`][json-format]
- [`eslint-comments`][eslint-comments]
- [`no-use-extend-native`][no-extend-native]
- [`sonarjs`][sonarjs]
- [`lodash`][lodash]
- [`optimize-regex`][optimize-regex]
- [`simple-import-sort`][simple-import-sort]
- [`perf-standard`][perf-standard]
- [`no-secrets`][no-secrets]
- [`security`][security]
- [`unicorn`][unicorn]
- [`standard`][standard]

## Extra Options
### TypeScript
In addition to the packages installed above, you need to install these:
```shell script
yarn add -D @typescript-eslint/parser eslint-config-standard-with-typescript @typescript-eslint/eslint-plugin
# OR
npm i -D @typescript-eslint/parser eslint-config-standard-with-typescript @typescript-eslint/eslint-plugin
```
You may also have to adjust the `parserOptions` to specify the TypeScript project location and root directory.
#### Parser
This option uses [`@typescript-eslint/parser`][ts-parser] as the parser.
#### Configs
- [`plugin:import/typescript`][import-ts],
- [`standard-with-typescript`][standard-ts-config],
- [`plugin:@typescript-eslint/recommended`][eslint-ts-config],
- [`plugin:@typescript-eslint/recommended-requiring-type-checking`][eslint-ts-config],
- [`prettier/@typescript-eslint`][prettier-config]
#### Plugins
- [`@typescript-eslint`][eslint-ts]
### Vue
In addition to the packages installed above, you need to install this:
```shell script
yarn add -D eslint-plugin-vue
# OD
npm i -D eslint-plugin-vue
```
#### Configs
- [`'plugin:vue/vue3-recommended'`][vue-config]
- [`prettier/vue`][prettier-config]
#### Plugins
- [`vue`][vue]

## Author
**@gabedunn/eslint-config** © [Gabe Dunn](https://github.com/redxtech), Released under the [MIT](./license.md) License.

[eslint-rec]: https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
[import-config]: https://www.npmjs.com/package/eslint-plugin-import#installation
[node-config]: https://www.npmjs.com/package/eslint-plugin-node#-configs
[promise-config]: https://www.npmjs.com/package/eslint-plugin-promise#usage
[comments-config]: https://mysticatea.github.io/eslint-plugin-eslint-comments/#📖-usage
[no-extend-native-config]: https://www.npmjs.com/package/eslint-plugin-no-use-extend-native#usage
[sonarjs-config]: https://www.npmjs.com/package/eslint-plugin-sonarjs#usage
[lodash-config]: https://www.npmjs.com/package/eslint-plugin-lodash#recommended-configuration
[perf-standard]: https://www.npmjs.com/package/eslint-plugin-perf-standard
[security-config]: https://www.npmjs.com/package/eslint-plugin-security#usage
[unicorn-config]: https://www.npmjs.com/package/eslint-plugin-unicorn#recommended-config
[standard-config]: https://www.npmjs.com/package/eslint-config-standard#usage
[prettier-config]: https://github.com/prettier/eslint-config-prettier#example-configuration

[eslint-ts]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[import]: https://www.npmjs.com/package/eslint-plugin-import
[node]: https://www.npmjs.com/package/eslint-plugin-node
[promise]: https://www.npmjs.com/package/eslint-plugin-promise
[json-format]: https://www.npmjs.com/package/eslint-plugin-json-format
[eslint-comments]: https://www.npmjs.com/package/eslint-plugin-eslint-comments
[no-extend-native]: https://www.npmjs.com/package/eslint-plugin-no-use-extend-native
[sonarjs]: https://www.npmjs.com/package/eslint-plugin-sonarjs
[lodash]: https://www.npmjs.com/package/eslint-plugin-lodash
[optimize-regex]: https://www.npmjs.com/package/eslint-plugin-optimize-regex
[simple-import-sort]: https://www.npmjs.com/package/eslint-plugin-simple-import-sort
[perf-standard]: https://www.npmjs.com/package/eslint-plugin-perf-standard
[no-secrets]: https://www.npmjs.com/package/eslint-plugin-no-secrets
[security]: https://www.npmjs.com/package/eslint-plugin-security
[unicorn]: https://www.npmjs.com/package/eslint-plugin-unicorn
[standard]: https://www.npmjs.com/package/eslint-plugin-standard

[ts-parser]: https://www.npmjs.com/package/@typescript-eslint/parser
[import-ts]: https://www.npmjs.com/package/eslint-plugin-import#typescript
[standard-ts-config]: https://www.npmjs.com/package/eslint-config-standard-with-typescript#usage
[eslint-ts-config]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin#usage
[vue-config]: https://eslint.vuejs.org/user-guide/#usage
[vue]: https://www.npmjs.com/package/eslint-plugin-vue
