<template>
  <div>
    <!--search-->
    <div class="subnav">
      <div class="nav-content container">
        <div>
    	    <h2>{{getClient.name}} 📱 {{getClient.tel}}</h2>
          <input
            @input="searchByName"
            type="search"
            placeholder="🔍 Buscar por nombre"
          >
        </div>
        <div class="ml-auto">
          <button>➕ Nuevo Paciente</button>
          <button>📝 Editar Paciente</button>
        </div>
      </div>
    </div>
    <!--list-->
    <!--load-->
    <p class="container" >Cargando...</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	methods: {
		searchByName() {
		}
	},
  computed: {
    getClient() {
      return Object
      .values(this.$store.state.clientes.data)
      .filter(item => {
      	return item.id == this.$route.params.id
      })[0]
    },
  },
}
</script>
