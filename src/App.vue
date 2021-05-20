<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import HomePage from './components/FindTeam/HomePage.vue'
export default {
  components: { HomePage },
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