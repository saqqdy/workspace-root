import { isAbsolute, join } from 'node:path'
import findYarnWorkspaceRoot from 'find-yarn-workspace-root'
import { findWorkspaceDir } from '@pnpm/find-workspace-dir'
import { findUp, findUpSync } from 'find-up'
import { pathExists, pathExistsSync } from 'path-exists'

export interface WorkspaceRootResult {
	name: string
	version: string
	isWorkspace: boolean
}

const cwd = process.cwd()

async function workspaceRoot(pkgPath: string): Promise<WorkspaceRootResult | null> {
	//
}

function workspaceRootSync(pkgPath: string): WorkspaceRootResult | null {
	//
}

export { workspaceRootSync, workspaceRoot, workspaceRoot as default }
