import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'
Vue.use(Vuex)
import { firebase } from '../config/firebase.js'
import Clientes from './modules/Clientes.js'
import Pacientes from './modules/Pacientes.js'

// do the magic 🧙🏻‍♂️
const easyFirestore = VuexEasyFirestore(
  [Clientes, Pacientes],
  {logging: true, FirebaseDependency: firebase}
)

const storeData = {
  plugins: [easyFirestore],

  state: {
    _id: '',
  	_search: '',
  	load: true,
  	user: null,
  	isAuthenticated: false,
    pagination: 5,
    breadcrumbs: [],
  },

  mutations: {
    setLoad(state, load) {
    	state.load = load
    },
    setSearch(state, name) {
      state._search = name
    },
    setId(state, id) {
      state._id = id
    },
    setAuth(state, data) {
      state.isAuthenticated = data.isAuthenticated
      state.user = data.user
    },
    //setBreadcrumbs(state, breadcrumbs) {
    //  state.breadcrumbs = breadcrumbs.map((item, key) => {
    //    let name = (item.name === "") ? "web" : item.name
    //    let link = (key > 0) ? `/${breadcrumbs[key-1].name}/${item.name}` : `/${item.name}`
    //    return { name, link }
    //  })
    //},
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

    clientesByName: (state) => {
      return Object
      .values(state.clientes.data)
      .filter(
        item => item.name.toLowerCase().includes(state._search.toLowerCase())
      )
    },

    pacientes: state => {
      return Object
      .values(state.pacientes.data)
      .filter(item => item.idCliente.includes(state._id))
      .slice(0)
      .slice(-state.pagination)
      .reverse()
    },

    pacientesByName: (state) => {
      return Object
      .values(state.pacientes.data)
      .filter(
        item => item.name.toLowerCase().includes(state._search.toLowerCase())
        && item.idCliente.includes(state._id)
      )
    },
  },
}

// initialise Vuex
const store = new Vuex.Store(storeData)

export default store
