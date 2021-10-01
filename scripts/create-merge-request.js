/* eslint-disable-next-line @typescript-eslint/no-var-requires*/
const { exec } = require('child_process')

const targetBranch = process.argv[2] || 'develop'
/* eslint-disable-next-line no-multi-str */
exec(
	'git push origin HEAD \
        -o merge_request.create \
        -o merge_request.remove_source_branch \
        -o merge_request.target=' +
		targetBranch,
	(error, stdout, stderr) => {
		stdout && console.log(`[stdout]\n${stdout}`)
		stderr && console.log(`[stderr]\n${stderr}`)
		if (error !== null) {
			console.log(`exec error: ${error}`)
		}
	}
)
