import type { MutationTree } from 'vuex'
import type { State } from './state'

export enum MutationMethods {
	ROUTES = 'ROUTES',
}

export interface Mutations<S = State> {
	[MutationMethods.ROUTES](state: S, routes: []): void
}

export const mutations: MutationTree<State> & Mutations = {
	[MutationMethods.ROUTES](state, result) {
		state.routes = result
	},
}
