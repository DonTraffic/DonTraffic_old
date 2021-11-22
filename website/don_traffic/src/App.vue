<template>
  <div class="main">
    <StartWindow />
  </div>
</template>

<script>
import StartWindow from "./components/startWindow.vue";

export default {
  name: "App",
  components: {StartWindow}
};
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;

  }
</style>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(59, 59, 59);
  margin: 0 auto;
  overflow: hidden;
}
</style>
