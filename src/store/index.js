import Vue from 'vue'
import Vuex from 'vuex'
import { pageComponents } from "./page_components.js"
import store from "./app_store.js"
import { manager } from "./manager.js"
Vue.use(Vuex);

const { state, getters, mutations, actions } = store;
export default function (/* { ssrContext } */) {
	const Store = new Vuex.Store({
		state,
		getters,
		mutations,
		actions,
		modules: {
			pageComponents,
			manager
		},
		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEV
	})
	return Store
}