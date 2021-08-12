import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'
Vue.use(Vuex)
import { firebase, firestore } from '../config/firebase.js'
import Clientes from './modules/Clientes.js'

// do the magic 🧙🏻‍♂️
const easyFirestore = VuexEasyFirestore(
  [Clientes],
  {logging: true, FirebaseDependency: firebase}
)

const storeData = {
  plugins: [easyFirestore],

  state: {
  	search: '',
  	load: true,
  	user: null,
  	isAuthenticated: false,
    pagination: 5,
  },

  mutations: {
    setLoad(state, load) { state.load = load },
    setSearch(state, name) { state.search = name },

    pushPagination(state, qty) {
    	let totalPagination = state.pagination + qty
    	let totalItems = Object.keys(state.clientes.data).length

      if(totalPagination > totalItems) {
        return state.pagination = totalItems
      }
      state.pagination = totalPagination
    }
  },

  getters: {
    clientes: state => {
      return Object
      .values(state.clientes.data)
      .slice(0)
      .slice(-state.pagination)
      .reverse()
    },

    filtro: (state) => {
      return Object
      .values(state.clientes.data)
      .filter(
        item => item.name.toLowerCase().includes(state.search.toLowerCase())
      )
    },

  },
}

// initialise Vuex
const store = new Vuex.Store(storeData)

// init firestore cloud data base
firestore()

export default store
