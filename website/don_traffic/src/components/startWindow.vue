<template>
  <div id="startWindow_container">
    <h1>DonTraffic.ru</h1>
    <p>Если программировать, то с любовью</p>
    <button @click="windowMove()">Перейти к портфолио</button>
  </div>
</template>

<script>
export default {
  name: 'startWindow',
  methods: {
    windowMove(){
      document.getElementById('startWindow_container').classList.toggle('active')
    },
  }
}
</script>

<style scoped lang="scss">
  #startWindow_container{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgb(129, 129, 129);
    background: url('../assets/startWindow/startWindowBackground.jpg') center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 1s;

    h1{
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.5) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-style: normal;
      font-weight: normal;
      font-size: 61.04px;

    }

    p{
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Aksara Bali Galang;
      text-align: center;
      font-size: 16px;
      line-height: 24px;
      margin: 0px 0px 32px 0px;
      max-width: 170px;
      display: inline-block;
      
    }

    button{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      transition: .5s ease;

      &:hover{
        cursor: pointer;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 1);
        color: rgba(255, 255, 255, 1);
        transition: .3s ease;
      }

    }

  }

  .active{
    transform: translateY(-100%);
  }
</style>
