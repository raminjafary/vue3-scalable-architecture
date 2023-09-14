import type { App, Component as VueComponent } from 'vue'
import type { IContext } from '@/context'

// const layouts = import.meta.glob("./layouts/*.vue")

// async function registerLayouts(app: App<Element>) {
//     for (const path in layouts) {
//         const component = await layouts[path]()
//         const name = component.default.__file.split("/").pop().replace(".vue", "")
//         app.component(name, component.default)
//     }
// }

type IComponent = { [key: string]: VueComponent }

const layouts = {} as IComponent

function registerLayouts(app: App<Element>, ctx: IContext) {
	for (const layout in layouts) {
		ctx.Component.register(
			app,
			{
				component: layouts[layout],
				name: layout,
			},
			'layout'
		)
	}
}

export default function registerGlobalComponents(app: App<Element>, ctx: IContext) {
	registerLayouts(app, ctx)
}
