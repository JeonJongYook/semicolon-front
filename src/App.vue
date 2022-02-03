<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <signup msg="Welcome to Your Vue.js App"/>
</template>

<script>
import login from 'src/components/common/LogIn.vue'
import signup from 'src/components/common/SignUp.vue'

export default {
  name: 'App',
  components: {
    signup,
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
