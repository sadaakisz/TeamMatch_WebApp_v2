<template>
  <div id="app">
    <!-- <router-view/> -->
    <login></login>
  </div>
</template>


<script>
import Login from './components/Login/Login.vue';
export default {
  components: { Login },
  setup() {
    
  },
}
</script>
<style lang="scss">

body {
  height: 100vh;
  margin: 0;
}

#app {
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  font-size: 16px;
}

</style>