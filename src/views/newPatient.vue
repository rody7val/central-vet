<template>
  <div>
    <div class="subnav">
      <div class="container">
        <h2>Nuevo Paciente de {{client.name}}</h2>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <form @submit.prevent="save">
        	<!-- name -->
          <label>* Nombre</label>
          <input
            v-model="patient.name"
            type="text"
            placeholder="Nombre"
            required
          >
          <!-- especie -->
          <label>* Especie</label>
          <select v-model="patient.dog" required>
          	<option selected disabled v-bind:value="null">Seleccionar</option>
          	<option v-bind:value="'Perro'">Perro</option>
          	<option v-bind:value="'Gato'">Gato</option>
          </select>
          <!-- sexo -->
          <label>* Sexo</label>
          <select v-model="patient.feme" required>
          	<option selected disabled v-bind:value="null">Seleccionar</option>
          	<option v-bind:value="'Macho'">Macho</option>
          	<option v-bind:value="'Hembra'">Hembra</option>
          </select>
        	<!-- birth -->
          <label>Fecha nacimiento</label>
          <input
            v-model="patient.birth"
            type="date"
            placeholder="Fecha Nacimiento"
          />
        	<!-- raza -->
          <label>Raza</label>
          <input
            v-model="patient.race"
            type="text"
            placeholder="Raza"
          >
          <!-- actions -->
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
  mounted() {
    //this.$store.commit('setId', this.client.id)
    //this.$store.commit('setSearch', '')
  },

  data() {
    return {
      patient: {
        name: '',
        dog: null,
        feme: null,
        birth: '',
        race: '',
        done: false
      }
    }
  },
  computed: {
    getRredirect() {
      const redirect =
        this.$router.history &&
        this.$router.history.current &&
        this.$router.history.current.query &&
        this.$router.history.current.query.redirect
        ? `${this.$router.history.current.query.redirect}`
        : '/clientes'
      //console.log(redirect)
      return redirect
    },

    client() {
      return Object
      .values(this.$store.state.clientes.data)
      .filter(item => {
      	return item.id == this.$route.params.idCliente
      })[0]
    },
  },

  methods: {
    save() {
      //alert(JSON.stringify(this.patient, null, 2))
      this.$store.dispatch('pacientes/set', this.patient)
      .then(this.$router.push(getRredirect))
      .catch(e => alert(e))
    }
  }
}
</script>
