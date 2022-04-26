<template>
  <div id="startWindow">
    <div id="startWindow_container">
      <div id="startWindow_heading" class="textDropped">
        <h1 class="textDropped-top">DonTraffic.ru</h1>
        <div class="textDropped-bottom">唐特拉菲克</div>
      </div>
      <div id="startWindow_subtitle" class="textDropped">
        <h2 class="textDropped-top">Если программировать, то с любовью</h2>
        <div class="textDropped-bottom">如果你编程，那么用爱</div>
      </div>
      <button id="startWindow_button" class="textDropped" @click="windowMove()">
        <h2 class="textDropped-top">Перейти к портфолио</h2>
        <div class="textDropped-bottom">进入投资组合</div>
      </button>
    </div>

    <div id="startWindow_screensaver"></div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'startWindow',
  data() {
    return {
      
    }
  },
  mounted() {
    setTimeout(this.funStartAnimation, 3000)
    setTimeout(this.funScreensaverOf, 3000)
  },
  methods: {
    // выключение наложенной заставки
    funScreensaverOf(){
      $('#startWindow_screensaver').css('display', 'none')
    },
    // старт анимации текста
    funStartAnimation(){
      let items = document.querySelectorAll('.textDropped')
      for (let i = 0; i < items.length; i++) {
        function useAnim() {
          $(items[i].querySelector('.textDropped-top')).addClass('activeAnimTop')
          $(items[i].querySelector('.textDropped-bottom')).addClass('activeAnimBottom')
        }
        setTimeout(useAnim, i * 2000)
      }
    },
    // при клике на кнопку, поднимаем стартовый экран
    windowMove(){
      this.$emit('windowMove', true)
      $('#startWindow').addClass('active')
    },

  }
}
</script>

<style scoped lang="scss">
#startWindow{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  transition: transform 1s;

  background-color: rgb(0, 0, 0);
  background-image: url('../../assets/img/startWindow/startWindowBackground.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 1024px) {
    background-size: 150%;
  }
  @media screen and (max-width: 768px) {
    background-size: 200%;
  }

  #startWindow_container{
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    #startWindow_heading{
      width: 405px;

      h1, div{
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.6) 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-style: normal;
        font-weight: 500;
        font-size: 61.04px;
        text-align: center;
        width: 100%;
      }

      div{
        font-size: 50.04px;
      }

    }

    #startWindow_subtitle{
      margin-bottom: 32px;
      max-width: 230px;
      width: 220px;
      height: 48px;

      h2, div{
        font-size: 16px;
        opacity: 0.5;
        color: white;
        text-align: center;
        line-height: 24px;
        font-weight: 300;
      }
      
    }

    #startWindow_button{
      height: 48px;
      width: 212px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      border: 1px solid transparent;
      border-image: linear-gradient(#ffffff , #ffffff81, #ffffff00);
      border-image-slice: 1;
      color: rgba(255, 255, 255, 0.7);
      transition: .5s ease;

      h2, div{
        font-size: 16px;
        color: #FFF;
        font-weight: 100;
        height: 100%;
        display: flex;
        align-items: center;
      }

      &:hover{
        cursor: pointer;
        background: rgba(255, 255, 255, 0.15);
        border-image: linear-gradient(#ffffff , #ffffff, #ffffff);
        border-image-slice: 1;
        color: rgba(255, 255, 255, 1);
        transition: .3s ease;
      }

    }

    .textDropped{
      position: relative;

      .textDropped-top{
        position: absolute;
        top: -60%;
        transform: rotateX(90deg);
      }

      .textDropped-bottom{
        transform: rotateX(0deg);
      }

      .activeAnimTop{
        animation: animTextDroppedTop 3s ease-in-out;
        animation-fill-mode: forwards;
      }

      .activeAnimBottom{
        animation: animTextDroppedBottom 3s ease-in-out;
        animation-fill-mode: forwards;
      }
      
    }

    .startWindow_eggsMongen{
      position: absolute;
      bottom: 0;
      left: 0;
      overflow: hidden;
      height: 100px;
      img{
        height: 100%;
        transform: translateX(-105px);
        // transform: translateY(5px);
        transition: .4s ease;
        border-top-right-radius: 20px;
      }

      &:hover{
        cursor: pointer;
        img{
          transform: translateX(0px);
        }
      }

    }

  }

  #startWindow_screensaver{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    z-index: 10;
    animation: screensaverOf 3s ease;
    animation-fill-mode: forwards;
  }

  @keyframes screensaverOf {
    to{
      opacity: 0;
    }
  }

  @keyframes animTextDroppedTop {
    to{
      transform: rotateX(0deg);
      top: 0px;
    }
  }

  @keyframes animTextDroppedBottom {
    to{
      // transform: rotateX(90deg);
      opacity: 0;
    }
  }
}

.active{
  transform: translateY(-100%);
}

</style>
