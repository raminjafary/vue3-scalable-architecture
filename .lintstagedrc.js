export default {
	'**/*.{ts,js,vue}': (fileNames) =>
		`cross-env NODE_ENV=production eslint --ext .js,.ts,.vue --ignore-path .gitignore ${fileNames.join(
			' '
		)} --fix`,
	'**/*': (fileNames) =>
		`prettier  --ignore-path .gitignore -u --write ${fileNames.join(' ')} --fix`,
	'**/*.{css,scss,vue}': (fileNames) =>
		`stylelint --ignore-path .gitignore ${fileNames.join(' ')} --fix`,
}
