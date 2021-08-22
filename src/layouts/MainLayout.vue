<template>
  <div>
  	<!--header-->
    <div id="navbar" class="shadow">
    	<div class="container nav-content">
      	<nav class="nav-content aligner">
      		<img
            class="banner shadow border"
            src="../assets/logo-central-vet.jpg">
          <router-link to="/">Veterinaria</router-link>
          <router-link to="/clientes">Clínica</router-link>
      	</nav>
      	<nav class="ml-auto">
          <!--auth signin-->
          <button
            v-if="!$store.state.isAuthenticated"
            @click.prevent="signIn"
          >ACCEDER</button>
          <!--auth signout
          style="margin: 0 auto; display: block;"-->
          <menuAdmin v-else/>
          <button v-else @click.prevent="signOut">SALIR</button>
      	</nav>
      </div>
    </div>
    <!--alert-->
    <div class="alert" v-if="$route.query.msj && !isClose">
    	<div class="container">
        {{$route.query.msj}}
        <div class="alert-close" @click="handleClose">x</div>
    	</div>
    </div>
    <!--breadcrumbs
    <div class="subnav" v-if="isAdmin">
      <nav class="container aligner">
        <router-link v-for="item in breadcrumbs" :to="item.link" :key="item.name">
          {{item.name}}
        </router-link>
      </nav>
    </div>
    -->
    <!--view-->
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import menuAdmin from '../components/menuAdmin'

export default {
  components: { menuAdmin },

  data(){
    return {
      isClose: false,
    }
  },

  computed: {
    //...mapState(['breadcrumbs']),
    isAdmin() {
      return this.$store.state.user
      //functions required
      // && this.$store.state.user.admin
    }
  },

  methods: {
    handleClose() {
      this.isClose = !this.isClose
      this.$router.push("/login")
      this.isClose = !this.isClose
    },
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
      .auth()
      .signInWithPopup(provider)
      .catch(e=>{alert(e.message)})
    },
  }
}
</script>

<style lang="css">
	.banner{
		width: 45px;
    border-radius: 50%;
    margin-right: 13px;
	}
</style>