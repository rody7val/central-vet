<template>
  <div>
    <div class="subnav">
      <div class="container">
        <h2>Nuevo cliente</h2>
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
            <input class="btn-success" type="submit" value="Guardar">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      client: {
        name: '',
        tel: '',
        //dir: '',
        done: false
      }
    }
  },

  methods: {
    save() {
      this.$store.dispatch('clientes/set', this.client)
      .then(this.$router.push('/clientes'))
      .catch(e => alert(e))
    }
  }
}
</script>
