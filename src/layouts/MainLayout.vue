<template>
  <div>
    <div id="navbar" class="shadow">
    	<div class="container nav-content">
      	<nav class="aligner">
      		<img class="banner shadow" src="../assets/logo-central-vet.jpg">
          <router-link to="/">Veterinaria</router-link>
          <router-link to="/admin">Clínica</router-link>
      	</nav>
      	<nav class="ml-auto">
          <!--auth signin-->
          <button
            v-if="!$store.state.isAuthenticated"
            @click.prevent="signIn"
          >ACCEDER</button>
          <!--auth signout-->
          <button
            v-else
            @click.prevent="signOut"
          >SALIR</button>
      	</nav>
      </div>
    </div>
    <div class="container">
    	<router-view/>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider).catch(e=>{alert(e.message)})
}

const signOut = () => {
  firebase.auth().signOut().catch(e=>{alert(e.message)})
}

export default {
  data() {
  	return {
      signIn,
      signOut,
  	}
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