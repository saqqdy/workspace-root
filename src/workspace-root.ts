#!/usr/bin/env ts-node

import { createRequire } from 'node:module'
// import { spawnSync } from 'node:child_process'
// import { join } from 'node:path'
import { program } from 'commander'
import chalk from 'chalk'
import getGitRevParse from '@gitmars/core/lib/git/getGitRevParse'
// import { version } from '../package.json' assert { type: 'json' }
import { workspaceRootaceRootaceRootaceRoot } from '.'

const require = createRequire(import.meta.url)
const { yellow } = chalk
const { version } = require('../package.json')

export interface WorkspaceRootaceRootOption {
	update?: boolean
}

program.version(
	'\n' +
		'+-+-+-+-+-+-+-+\n' +
		'|w|h|a|t|-|p|m|\n' +
		'+-+-+-+-+-+-+-+\n' +
		'\n' +
		`v${version}, powered by saqqdy\n`,
	'-v, --version',
	'View workspace-root version number'
)

program
	.name('workspace-root')
	.usage('[path] [options]')
	.description('Check for outdated, incorrect, and unused dependencies.')
	.argument(
		'[path]',
		'Where to check. Defaults to current directory. Use -g for checking global modules.'
	)
	// .option('-g, --global', 'Look at global modules.')
	// .option('--debug', 'Debug output. Throw in a gist when creating issues on github.')
	.action(async (path?: string, options?: WorkspaceRootaceRootOption) => {
		const { root } = getGitRevParse()
		if (!path) path = root

		const pm = await workspaceRoot(path)
		console.log(pm)
	})

// 自定义帮助
program.on('--help', function () {
	console.info('\nExamples')
	console.info('  workspace-root', "# See what can be updated, what isn't being used.")
	console.info('  workspace-root ../foo', '# Check another path.')
	console.info(
		'  workspace-root -gu',
		'# Update globally installed modules by picking which ones to upgrade.'
	)
})

// 映射不存在的指令
program.on('command:*', function (types: string[], opts: string[]) {
	const cmd = ['check', 'ck']
	if (!cmd.includes(types[0])) {
		console.info(yellow(`workspace-root does not provide the command "workspace-root ${types[0]}"`))
	}
})

program.parse(process.argv)
