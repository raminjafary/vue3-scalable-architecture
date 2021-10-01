import type { App, Component as VueComponent } from 'vue'

type ComponentType = 'layout' | 'primevue'

type Cmp = {
	name: string
	component: VueComponent
}

export default class Component {
	name!: 'Component'
	components!: {
		layout: Cmp[]
		primevue: Cmp[]
	}

	constructor() {
		this.name = 'Component'

		this.components = {
			layout: [],
			primevue: [],
		}
	}

	public register<T extends Cmp>(app: App<Element>, cmp: T, type: ComponentType) {
		if (cmp.name === undefined) {
			throw 'Missing prop name in component'
		}

		app.component(cmp.name, cmp.component)

		this.components[type].push({
			name: cmp.name,
			component: cmp.component,
		})
	}
}
