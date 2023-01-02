import workspace-root from '../index'

test('defines init() & create()', () => {
	expect(typeof workspace-root.init).toBe('function')
	expect(typeof workspace-root.create).toBe('function')
})
