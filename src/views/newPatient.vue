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
          <input
            v-model="patient.name"
            type="text"
            placeholder="* Apellido y nombre"
            required
          >
          <!-- especie -->
          <select v-model="patient.dog" required>
          	<option selected disabled v-bind:value="null">* Seleccionar Especie</option>
          	<option v-bind:value="'Perro'">Perro</option>
          	<option v-bind:value="'Gato'">Gato</option>
          </select>
          <!-- sexo -->
          <select v-model="patient.feme" required>
          	<option selected disabled v-bind:value="null">* Seleccionar Sexo</option>
          	<option v-bind:value="'Macho'">Macho</option>
          	<option v-bind:value="'Hembra'">Hembra</option>
          </select>
        	<!-- birth -->
          
            <input  style="display: inline-block"
              v-model="patient.birth"
              type="date"
              placeholder="Fecha Nacimiento"
            ><label> (Fecha nacimiento)</label></input>
        	<!-- raza -->
          <input
            v-model="patient.race"
            type="text"
            placeholder="Raza"
          >
          <!-- actions -->
          <div class="nav-content">
            <button @click="$router.push('/pacientes')">Cancelar</button>
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
      this.$store.dispatch('pacientes/set', this.client)
      .then(this.$router.push('/pacientes'))
      .catch(e => alert(e))
    }
  }
}
</script>
