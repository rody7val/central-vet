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
            <p>
              <b>{{item.name}}</b>
            </p>
            <p v-if="item.tel">📱 {{item.tel}}</p>
            <p v-if="item.dir">📌 {{item.dir}}</p>
            <p>
              <small>
                creado: {{moment.unix(item.created_at.seconds).calendar()}}
              </small>
            </p>
          </router-link>
          <button class="ml-auto"  @click="toEditClient(item.id)">📝 Editar</button>
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
    toNewClient() {
      this.$router.push('/new/client')
    },
    toEditClient(id) {
      this.$router.push(`/edit/client/${id}`)
    },
    getMoreItems() {
      this.$store.commit('pushPagination', 5)
    },
    searchByName(e) {
      this.$store.commit('setSearch', e.target.value)
    }
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
<style type="scss">
  small {
    display: inline-block;
  }
  small:first-letter {
    text-transform: capitalize;
  }
</style>