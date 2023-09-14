import Router from '@/providers/router'
import Store from '@/providers/store'
import Component from '@/providers/component'

export type ProviderNames = 'Router' | 'Store' | 'Component'

export interface IContext {
	Router: Router
	Store: Store
	Component: Component
}

//@ts-ignore
type Constructor<T> = new (...args: []) => T

class ContextAdapter {
	#providerNames!: ProviderNames[]

	constructor() {
		this.#providerNames = []
	}

	register<T extends { name: ProviderNames }>(Provider: Constructor<T>) {
		const service = new Provider()
		const providerName = service.name

		if (this.#providerNames.includes(providerName)) {
			throw `provider ${providerName} exists!`
		}

		this.#providerNames.push(providerName)
		//@ts-ignore
		this[providerName] = service
	}
}

const context = new ContextAdapter()

context.register(Router)
context.register(Store)
context.register(Component)

export default context as unknown as IContext
