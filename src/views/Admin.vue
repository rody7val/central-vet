<template>
  <div class="container">
    <h1>👫 Clientes</h1>
    <section v-if="clientes.length">
      <span>
        {{getTotal}} en total 🔥 //
        {{clientes.length}} mostrando 😎//
      </span>
      <button @click="getMoreItems">Cargar más</button>
      <ul>
        <li v-for="(item, key) in clientes" :key="key">
          {{item.name}}
        </li>
      </ul>
    </section>
    <p v-else>Cargando...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  methods: {
    getMoreItems() {
      this.$store.commit('pushPagination', 5)
      //this.closeSync()
      //this.openSync()
    },
  },

  computed: {
  	getTotal() {
  		return Object.keys(this.$store.state.clientes.data).length
  	},
    ...mapGetters(['clientes'])
  },

  mounted() {
    const orderBy = ['created_at']
    this.$store.dispatch(
      'clientes/openDBChannel', {clauses: {orderBy}}
    )
  }
}
</script>
