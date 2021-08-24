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
            <button @click.prevent="$router.push(getRredirect)">Cancelar</button>
            <input class="btn-success" type="submit" value="Guardar">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
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

    getRredirect() {
      const redirect =
        this.$router.history &&
        this.$router.history.current &&
        this.$router.history.current.query &&
        this.$router.history.current.query.redirect
        ? `${this.$router.history.current.query.redirect}`
        : '/clientes'
      console.log(redirect)
      return redirect
    }
  },

  methods: {
    save() {
      this.$store.dispatch('clientes/set', this.getClient)
        .then(this.$router.push(this.getRredirect))
        .catch(e => alert(e))
    }
  }
}
</script>
