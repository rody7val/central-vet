<template>
  <div class="container">
    <h1>Iniciar sesión</h1>
    <!--auth signin-->
    <button
      v-if="!$store.state.isAuthenticated"
      @click.prevent="signIn"
    >ACCEDER</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods:{
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
      .auth()
      .signInWithPopup(provider)
      .catch(e=>{alert(e.message)})
    }
  },

}
</script>
