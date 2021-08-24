<template>
  <div>
    <!--search-->
    <div class="subnav">
      <div class="nav-content container">
        <div>
    	    <h2>{{client.name}}</h2>
          <p v-if="client.tel">📱 {{client.tel}}</p>
          <p v-if="client.dir">📌 {{client.dir}}</p>
          <input
            @input="searchByName"
            type="search"
            placeholder="🔍 Buscar por nombre"
          >
        </div>
        <div class="ml-auto">
          <button
            @click="toNewPatient(client.id, $route.path)">
            ➕ Nuevo Paciente
          </button>
          <button
            @click="toEditClient(client.id, $route.path)">
            📝 Editar Cliente
          </button>
          <button
            class="btn-danger"
            @click="deleteClient(client.id)">
            ❌ Borrar Cliente
          </button>
        </div>
      </div>
    </div>
    <!--list-->
    <section v-if="load">
      <ul class="list container">
        <li
          v-for="(item, key) in (!_search ? pacientes : pacientesByName)"
          class="nav-content"
          :key="key"
        >
          <router-link :to="'/pacientes/'+item.id">
            <p class="item-list uppercase"><b>{{item.name}}</b></p>
            <p>{{item.dog?"🐶":"🐺"}} {{item.dog}}</p>
            <p>{{!item.feme?"♀":"♂"}} {{item.feme}}</p>
            <p class="text-samll capitalize">
              <b>creado:</b> {{moment.unix(item.created_at.seconds).calendar()}}
            </p>
          </router-link>
          <button
            class="ml-auto"
            @click="toEditPacient(item.id)">
            📝 Editar
          </button>
          <button
            class="btn-danger"
            @click="deletePatient(item.id)">
            ❌ Borrar
          </button>
        </li>
      </ul>
    </section>
    <!--load-->
    <p class="container" v-else>Cargando...</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"

export default {
	methods: {
    getMoreItems() {
      this.$store.commit('pushPagination', 5)
    },
    searchByName(e) {
      //this.$store.commit('setId', this.client.id)
      this.$store.commit('setSearch', e.target.value)
    },
    //utils
    getClient(id) {
      return Object
      .values(this.$store.state.clientes.data)
      .filter(item => {
        return item.id == id
      })[0]
    },
    getPatient(id) {
      return Object
      .values(this.$store.state.pacientes.data)
      .filter(item => {
        return item.id == id
      })[0]
    },
    toEditClient(id, redirect) {
      this.$router.push(`/edit/client/${id}?redirect=${redirect}`)
    },
    toEditPacient(id, redirect) {
      this.$router.push(`/edit/patient/${id}?redirect=${redirect}`)
    },
    toNewPatient(id, redirect) {
      this.$router.push(`/new/patient/${id}?redirect=${redirect}`)
    },
    deleteClient(id) {
      const client = this.getClient(id)
      const question = `¿Borrar a ${client.name}?`
      if(confirm(question)){
        this.$store.dispatch('clientes/delete', id)
        return this.$router.push('/clientes')
      }
      return false
    },
    deletePatient(id) {
      const patient = this.getPatient(id)
      const question = `¿Borrar a ${patient.name}?`
      if(confirm(question))
        return this.$store.dispatch('pacientes/delete', patient.id)
      else
       return false
    },
	},

  computed: {
    ...mapState(['load', '_search']),
    ...mapGetters(['pacientes', 'pacientesByName']),

    client() {
      return Object
      .values(this.$store.state.clientes.data)
      .filter(item => {
      	return item.id == this.$route.params.id
      })[0]
    },
  },

  mounted(){this.$store.commit('setId', this.client.id)}
}
</script>
