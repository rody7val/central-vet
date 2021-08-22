<template>
  <div class="container">
    <div class="card">
      <img :src="$store.state.user.photoURL">
      <h3>{{$store.state.user.displayName}}</h3>
      <p><b>{{$store.state.user.email}}</b></p>
      <p v-if="$store.state.user.phoneNumber">
        {{$store.state.user.phoneNumber}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
