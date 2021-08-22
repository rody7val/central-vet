<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    signOut() {
      firebase
      .auth()
      .signOut()
      .then(this.$router.push("/"))
      .catch(e=>{alert(e.message)})
    }
  }
}
</script>

<template>
  <div>
    <!-- Header Navigation Menu Icons -->
    <button class="dropdown-button" v-if="show" key="on" @click="show = false">
      <svg viewBox="0 0 24 24" class="dropdown-icon">
        <title>Cerrar</title>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path fill="currentColor" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
      </svg>
    </button>
    <button class="dropdown-button" v-else key="off" @click="show = true">
      <svg viewBox="0 0 24 24" class="dropdown-icon">
        <title>Menu</title>
        <path fill="currentColor" d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
      </svg>
    </button>
    <!-- Dropdown Menu -->
    <transition name="dropdown">
      <div
        v-if="show"
        v-bind:class="{ active: show }"
        class="dropdown-menu shadow"
      >
        <ul class="dropdown-menu-nav">

          <li class="dropdown-menu-item">
            <router-link to="/my" class="dropdown-menu-link" title="Account">
              <img class="dropdown-menu-img border" :src="this.$store.state.user.photoURL">
              <div class="dropdown-menu-text">
                {{this.$store.state.user.displayName}}
              </div>
            </router-link>
          </li>
          <li class="dropdown-menu-item">
            <div class="dropdown-menu-link">
              <button class="ml-auto" @click.prevent="signOut">SALIR</button>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style>
  /*
    @import '../assets/css/dropdown.css'
  */
</style>