<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Futter></Futter>
  </div>
</template>

<script>
import Navbar from '@/view/Navbar'
import Futter from '@/view/Futter'

export default {
  name: 'App',
  components:{
    Navbar,
    Futter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
