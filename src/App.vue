<template>
  <div id="app">
    <div id="nav" class="shadow">
      <router-link to="/">Veterinaria</router-link> |
      <router-link to="/admin">Historia Clínica</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.shadow{
  box-shadow: 0px 1px 2px 0px rgba(60,64,67,.3),0px 1px 3px 1px rgba(60,64,67,.15);
}
#nav {
  padding: 15px;
  background-color: #efefef;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #7952b3;
    }
  }
}

.container{
  margin: 0 30px;

  .search {
    background-color: #efefef;    
    padding: 10px;
  }

  .list a {
    text-decoration: none;
    cursor: pointer;
    color: #2c3e50;
  }

  .list a:hover {
    color: #7952b3;
  }
}
</style>
