[index.md - v1.0.0](README.md) / Exports

# index.md - v1.0.0

## Table of contents

### References

- [default](modules.md#default)

### Functions

- [workspaceRoot](modules.md#workspaceroot)
- [workspaceRootSync](modules.md#workspacerootsync)

## References

### default

Renames and re-exports [workspaceRoot](modules.md#workspaceroot)

## Functions

### workspaceRoot

▸ **workspaceRoot**(`pkgPath`): `Promise`<`string` \| `null`\>

workspaceRoot

#### Parameters

| Name      | Type     | Description  |
| :-------- | :------- | :----------- |
| `pkgPath` | `string` | the pkg path |

#### Returns

`Promise`<`string` \| `null`\>

result - Promise\<WorkspaceRootResult | null\>

#### Defined in

node_modules/.pnpm/@node-kit+workspace-root@1.2.1/node_modules/@node-kit/workspace-root/dist/index.d.ts:7

---

### workspaceRootSync

▸ **workspaceRootSync**(`pkgPath?`): `string` \| `null`

workspaceRootSync

#### Parameters

| Name       | Type     | Description  |
| :--------- | :------- | :----------- |
| `pkgPath?` | `string` | the pkg path |

#### Returns

`string` \| `null`

result - WorkspaceRootResult | null

#### Defined in

node_modules/.pnpm/@node-kit+workspace-root@1.2.1/node_modules/@node-kit/workspace-root/dist/index.d.ts:17
