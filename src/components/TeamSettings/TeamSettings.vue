<template>
  <right-template/>
</template>

<script>
import RightTemplate from "@/components/RightTemplate";
export default {
name: "TeamSettings",
  components: {RightTemplate}
}
</script>

<style lang="scss">
@import "../../assets/scss/styles.scss";
body {
  height: 100%;
  display: grid;
  background-image: url("assets/bg.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
