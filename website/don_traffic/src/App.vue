<template>
  <div class="mainPage">
    <StartWindow @windowMove="windowMove"/>
    <MainPage v-if="start" :startAnimMain = startAnimMain />
  </div>
</template>

<script>
import StartWindow from "./components/startWindow.vue";
import MainPage from "./components/mainPage.vue"

export default {
  name: "App",
  data() {
    return {
      start: false,
      startAnimMain: false
    }
  },
  mounted() {
    setTimeout(this.funStart, 2000)
  },
  methods: {
    funStart() {
      this.start = true
    },
    windowMove(value) {
      this.startAnimMain = value
    }
  },
  components: {StartWindow, MainPage}
};
</script>

<style lang="scss">

  @font-face {
    font-family: Kashima; 
    src: url(./assets/fonts/Kashima.otf); 
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: Montserrat;

  }

*::-webkit-scrollbar,
  html *::-webkit-scrollbar {
    width: 0px;
  }
  *::-webkit-scrollbar-track,
  html *::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
    height: 100px;
  }
  *::-webkit-scrollbar-thumb,
  html *::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0);
    border-radius: 5px;
    border: 1px solid rgb(255, 255, 255);

  }
</style>

<style lang="scss" scoped>
.mainPage {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


