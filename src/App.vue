<template>
  <div id="app">
    <Index msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Index from './components/index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
