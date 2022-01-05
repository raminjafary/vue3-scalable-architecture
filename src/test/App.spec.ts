import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
	it('renders App', () => {
		const wrapper = shallowMount(App, {
			global: {
				stubs: {
					'router-view': {
						template: '<span />',
					},
				},
			},
		})
		expect(wrapper).toBeTruthy()
	})
})
