<template>
  <div>
    <div class="subnav">
      <div class="container">
        <h2>Editar cliente</h2>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <form @submit.prevent="save">
          <input
            v-model="client.name"
            type="text"
            placeholder="* Apellido y nombre"
            required
          >
          <input
            v-model="client.tel"
            type="text"
            placeholder="Telefono"
          >
          <input
            v-model="client.dir"
            type="text"
            placeholder="Dirección"
          >          
          <div class="nav-content">
            <button @click="$router.push('/clientes')">Cancelar</button>
            <input class="btn-primary" type="submit" value="Guardar">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		client() {
			return this.getClient ? this.getClient : {}
		},

    getClient() {
      return Object
      .values(this.$store.state.clientes.data)
      .filter(item => {
      	return item.id == this.$route.params.id
      })[0]
    },
	},

  methods: {
    save() {
      this.$store.dispatch('clientes/set', this.getClient)
      .then(this.$router.push('/clientes'))
      .catch(e => alert(e))
    }
  }
}
</script>
