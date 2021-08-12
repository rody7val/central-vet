<template>
  <div class="container">
    <h1>👫 Clientes</h1>
    <section v-if="load">
      <!--search-->
      <div class="search shadow">
        <input
          @input="searchByName"
          type="search"
          placeholder="Buscar por nombre"
        >
        <br>
      	<span>🔥 {{getTotal}} clientes en total</span>
      </div>
      <!--list-->
      <ul class="list">
        <li v-for="(item, key) in (!search ? clientes : filtro)" :key="key">
          <p>
            <router-link :to="'/client/'+item.id">
            	<b>{{item.name}}</b><br>
            	<i>{{item.tel}}</i><br>
            	<small>{{moment.unix(item.created_at.seconds).calendar()}}</small>
            </router-link>
          </p>          
        </li>
      </ul>
      <button @click="getMoreItems">Cargar más</button>
    </section>
    <p v-else>Cargando...</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  methods: {
    getMoreItems() {
      this.$store.commit('pushPagination', 5)
    },
    searchByName(e) {
    	this.$store.commit('setSearch', e.target.value)
    }
  },

  computed: {
    ...mapState(['load', 'search']),
    ...mapGetters(['clientes', 'filtro']),
  	getTotal() {
  		return Object.keys(this.$store.state.clientes.data).length
  	},
  },

  mounted() {
    const orderBy = ['created_at']
    this.$store.dispatch(
      'clientes/openDBChannel', {clauses: {orderBy}}
    )
  }
}
</script>
<style type="scss">
	small{text-transform: capitalize}
</style>