<template>
  <div class="view">
    <h1>Login</h1>
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
