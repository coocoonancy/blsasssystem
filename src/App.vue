<template>
  <div id="app">
<<<<<<< HEAD
    <Index msg="Welcome to Your Vue.js App"/>
=======
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> 1d0a3fade37020f45179b50f4b55f803b2f50471
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
<<<<<<< HEAD
  height: 100%;
=======
>>>>>>> 1d0a3fade37020f45179b50f4b55f803b2f50471
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
