<template>
  <div class="main">
    <StartWindow />
    <div class="container main_grid">
      <div class="main_person">
        <img src="./assets/persona.png" alt="person">
      </div>
      <div class="main_content">
        <div class="main_content-prof">
          Привет, я
          <div class="content_prof-container">Web-программист</div>
        </div>
        <div class="main_content-name">
          Меня зовут Уханов Дмитрий
        </div>
        <button class="main_content-button">Почему именно я?</button>
      </div>
    </div>
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
    user-select: none;

  }
</style>

<style lang="scss">

.container{
  // width: 100vw;
  margin: 0px auto;
  max-width: 1366px;
  width: 100%;
  transition: .4s ease;
  // background-color: aqua;
}

.main {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #000;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .main_grid{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    color: #fff;

    .main_person{
      img{
        width: 100%;
      }
    }

    .main_content{
      .main_content-prof{
        font-size: 31.25px;
        .content_prof-container{
          display: inline-block;
          color: #000;
          background: #FF7514;
          border: 1px solid #000;
          box-sizing: border-box;
          border-radius: 4px;
          padding: 4px;
        }
      }
      .main_content-name{
        font-size: 31.25px;
      }
      .main_content-button{
        font-size: 20px;
        color: #FF7514;
        background: #000;
        border: 1px solid #FF7514;
        box-sizing: border-box;
        border-radius: 6px;
        padding: 8px 16px;
        transition: .8s ease;

        &:hover{
          color: #000;
          background: #FF7514;
          border: 1px solid #000;
          cursor: pointer;
          transition: .4s ease;
        }

      }

    }

  }

}
</style>
