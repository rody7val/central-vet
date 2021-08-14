<template>
  <div id="app">
    <div class="alert" v-if="$route.query.msj && !isClose">
      {{$route.query.msj}}
      <div class="alert-close" @click="handleClose">x</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isClose: false,
    }
  },

  methods: {
    handleClose() {
      this.isClose = !this.isClose
      this.$router.push("/login")
      this.isClose = !this.isClose
    }
  }
}
</script>

<style lang="scss">
body,html{
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.shadow{
  box-shadow: 0px 1px 2px 0px rgba(60,64,67,.3),0px 1px 3px 1px rgba(60,64,67,.15);
}

.nav-content{
  display: flex;
  a-webkit-align-items: center;
  align-items: center;
}

#navbar {
  padding: 13px;
  background-color: #efefef;

  .aligner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav{
    a {
      font-weight: bold;
      font-size: 18px;
      padding-right: 13px;
      padding-left: 13px;
      color: #2c3e50;
      text-decoration: none;
      text-transform: uppercase;

      &.router-link-exact-active {
        color: #7952b3;
      }
    }
  }
}

.ml-auto {
  margin-left: auto !important;
}

.alert {
  background-color: #fff3cd;
  color: #856404;
  border-color: #ffeeba;
  text-align: center;
  padding: 13px;

  .alert-close:hover{
    color: #3f3c33;
  }
  .alert-close{
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: .75rem 1.25rem;
    color: inherit;
    float: right;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1;
    color: #856404;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
  }
}

.container{
  margin: 0 30px;

  .view {
    padding: 0 15px 0 15px;
  }

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

@media (max-width: 768px) {
  .container{
    margin: 0px;
  }
}


/*
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
#nav {
  a {
    &.router-link-exact-active {
      color: #7952b3;
    }
  }
}
*/
</style>
