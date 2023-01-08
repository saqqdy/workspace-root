// import { isAbsolute, join } from 'node:path'
import findUp from 'find-up'
// import { pathExists, pathExistsSync } from 'path-exists'
import { findYarnWorkspaceRoot, findYarnWorkspaceRootSync } from './yarn'
import { findPnpmWorkspaceRoot, findPnpmWorkspaceRootSync } from './pnpm'
import { findLernaWorkspaceRoot, findLernaWorkspaceRootSync } from './lerna'
import { normalizeLerna, normalizePnpm, normalizeYarn } from './utils'

/**
 * workspaceRootSync
 *
 * @requires result - Promise<WorkspaceRootResult | null>
 */
async function workspaceRoot(pkgPath: string): Promise<string> {
	return (
		(await findPnpmWorkspaceRoot(pkgPath)) ||
		(await findYarnWorkspaceRoot(pkgPath)) ||
		(await findLernaWorkspaceRoot(pkgPath)) ||
		''
	)
}

/**
 * workspaceRootSync
 *
 * @requires result - WorkspaceRootResult | null
 */
function workspaceRootSync(pkgPath: string = process.cwd()): string {
	return (
		findPnpmWorkspaceRootSync(pkgPath) ||
		findYarnWorkspaceRootSync(pkgPath) ||
		findLernaWorkspaceRootSync(pkgPath) ||
		''
	)
}

export { workspaceRootSync, workspaceRoot, workspaceRoot as default }
