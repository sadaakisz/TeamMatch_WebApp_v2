<template>
  <div class="home">
    <h1>This is the home</h1>
    <b-button>welklom home</b-button>
    <img class="logo" src="../../assets/TeamMatchLogo.png">
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
.home {
  height: 100%;
}
.logo {
  filter: brightness(.6);
}
</style>