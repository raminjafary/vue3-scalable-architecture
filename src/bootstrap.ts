import type { IContext } from '@/context'

const modules = import.meta.glob('./modules/*/index.ts')

export default async function bootstrap(context: IContext) {
	const mods: IContext[] = []

	for (const path in modules) {
		const mod = await modules[path]()
		//@ts-ignore
		mods.push(mod.default(context))
	}

	return Promise.all(mods)
}
