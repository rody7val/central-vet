<template>
  <div>
    <!--search-->
    <div class="subnav">
      <div class="nav-content container">
        <div>
          <h2>📁 {{getTotal}} clientes</h2>
          <input
            @input="searchByName"
            type="search"
            placeholder="🔍 Buscar por nombre"
          >
        </div>
        <div class="ml-auto">
          <button @click.prevent="toNewClient">➕ Nuevo Cliente</button>
        </div>
      </div>
    </div>
    <!--list-->
    <section v-if="load">
      <ul class="list container">
        <li
          v-for="(item, key) in (!_search ? clientes : clientesByName)"
          class="nav-content"
          :key="key"
        >
          <router-link :to="'/clientes/'+item.id">
            <p class="item-list uppercase"><b>{{item.name}}</b></p>
            <p v-if="item.tel">📱 {{item.tel}}</p>
            <p v-if="item.dir">📌 {{item.dir}}</p>
            <p class="text-samll capitalize">
              <b>creado:</b> {{moment.unix(item.created_at.seconds).calendar()}}
            </p>
          </router-link>
          <button
            class="ml-auto"
            @click="toEditClient(item.id)">
            📝 Editar
          </button>
          <button
            class="btn-danger"
            @click="deleteClient(item.id)">
            ❌ Borrar
          </button>
        </li>
      </ul>
      <button class="container" @click="getMoreItems">Cargar más</button>
    </section>
    <!--load-->
    <p class="container" v-else>Cargando...</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  methods: {
    //utils
    getClient(id) {
      return Object
      .values(this.$store.state.clientes.data)
      .filter(item => {
        return item.id == id
      })[0]
    },
    //store sync firestore
    getMoreItems() {
      this.$store.commit('pushPagination', 5)
    },
    searchByName(e) {
      this.$store.commit('setSearch', e.target.value)
    },
    deleteClient(id) {
      const client = this.getClient(id)
      const question = `¿Borrar a ${client.name}?`
      if(confirm(question))
        return this.$store.dispatch('clientes/delete', client.id)
      else
       return false
    },
    //route
    toNewClient() {
      this.$router.push('/new/client')
    },
    toEditClient(id) {
      this.$router.push(`/edit/client/${id}`)
    },

  },

  computed: {
    ...mapState(['load', '_search']),
    ...mapGetters(['clientes', 'clientesByName']),
    getTotal() {
      return Object.keys(this.$store.state.clientes.data).length
    },
  },

  //mounted() {
  //  const orderBy = ['created_at']
  //  this.$store.dispatch(
  //    'clientes/openDBChannel', {clauses: {orderBy}}
  //  )
  //}
}
</script>
