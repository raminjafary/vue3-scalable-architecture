import type { Store as VuexStore, Module } from 'vuex'

export default class Store {
	name!: 'Store'
	#modules!: any[]

	constructor() {
		this.name = 'Store'
		this.#modules = []
	}

	public registerStore<S, R>(name: string, module: Module<S, R>) {
		this.#modules = [...this.#modules, { name, module }]
	}

	public registerModule<T>(vuexStore: VuexStore<T>) {
		for (const s of this.#modules) {
			vuexStore.registerModule(s.name, s.module)
		}
	}

	get modules(): Module<any, any>[] {
		return this.#modules
	}
}
