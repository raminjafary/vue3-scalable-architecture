import type { GetterTree } from 'vuex'
import type { State } from './state'

export enum GetterMethods {
	routes = 'routes',
}

export type Getters = {
	[GetterMethods.routes](state: State): (args: string) => string[]
}

export const getters: GetterTree<State, State> & Getters = {
	[GetterMethods.routes]: (state) => (args) => {
		if (args) return state.routes
		return []
	},
}
