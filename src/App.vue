<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getBreadcrumbs } from './utils'

export default {
  watch:{
    $route (to, from){
      let breadcrumbs = getBreadcrumbs(to.path)
      this.$store.commit('setBreadcrumbs', breadcrumbs)
    }
  }
}
</script>

<style lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
}
body,html{
  padding: 0px;
  margin: 0px;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0 20px;
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
.border{
  border: 1.7px solid #7236ea;
}

.nav-content{
  display: flex;
  a-webkit-align-items: center;
  align-items: center;
}

#navbar {
  background-color: #efefef;

  .aligner {
    display: flex;
    align-items: center;
  }

  nav{
    a:hover{
      background-color: #dfd7ef;
    }
    a {
      font-weight: bold;
      font-size: 17px;
      padding-right: 13px;
      padding-left: 13px;
      color: #2c3e50;
      text-decoration: none;
      text-transform: uppercase;
      padding: 20px 12px 20px 12px;

      &.router-link-exact-active {
        color: #7952b3;
        background-color: #dfd7ef
      }
    }
  }
}

.ml-auto {
  margin-left: auto !important;
}
.subnav{
  position: relative;
  background-color: #7952b3;
  padding-top: 13px;
  padding-bottom: 13px;
  text-transform: uppercase;
                    
  .aligner{
    a{
      color: white!important;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}
.alert {
  position: relative;
  background-color: #fff3cd;
  color: #856404;
  border-color: #ffeeba;
  text-align: margin-left;
  padding-top: 13px;
  padding-bottom: 13px;
  font-family: initial;

  .alert-close:hover{
    color: #3f3c33;
  }
  .alert-close{
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 28px;
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
  margin: 0 45px;
}

.search {
  background-color: #efefef;    
  padding-top: 10px;
  padding-bottom: 10px;
}

.list a {
  text-decoration: none;
  cursor: pointer;
  color: #2c3e50;
}

.list a:hover {
  color: #7952b3;
}

@media (max-width: 568px) {
  .alert-close{
    right: 0px!important;
  }
  .container{
    margin: 0 10px;
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
