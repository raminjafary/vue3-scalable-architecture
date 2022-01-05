import type { ActionTree, ActionContext } from 'vuex'
import type { State } from './state'
import type { Mutations } from './mutations'
import { MutationMethods } from './mutations'

export type ActionCtx = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1]
	): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export enum ActionMethods {
	routes = 'routes',
}

export interface Actions {
	[ActionMethods.routes](ctx: ActionCtx): Promise<void>
}

export const actions: ActionTree<State, State> & Actions = {
	async [ActionMethods.routes]({ state, commit }) {
		commit(MutationMethods.ROUTES, [])
	},
}
