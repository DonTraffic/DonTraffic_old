<template>
<div class="app">
  <div class="mainSlide container">

    <div class="menuPage_persona">
      <div class="menuPage_persona-container" v-on:click="visiblePersona()">
        <img
          id="persona_container-cursor"
          src="./assets/img/main/cursor.png"
          alt="cursor"
          draggable="false"
          v-if="visiblePersonaCursor"
        >
        <img
          id="persona_container-img"
          src="./assets/img/main/persona.png"
          alt="persona"
          draggable="false"
        >
      </div>
    </div>

    <div class="mainSlide-content">
      <div class="heading">
        Привет, я
        <div class="heading-container">
          Web-программист
        </div>
        <div class="heading-subtitle">
          Меня зовут, Уханов Дмитрий
        </div>
      </div>

      <button v-on:click="visibilitySlide('visibilitySlidePersona'), startPersona = true">&#60; Почему я?</button>
      <button v-on:click="visibilitySlide('visibilitySlideProject')">Мои Проекты &#62;</button>
    </div>

  </div>

  <!-- <StartSlide
    :startAnimPersona='startAnimPersona'
    :visibilitySlide='visibilitySlide'
    :visibilitySlideStart='visibilitySlideStart'
  ></StartSlide> -->
  <PersonaSlide
    v-bind:class="{'slideVisibility-left': visibilitySlidePersona == true}"
    :visibilitySlide = 'visibilitySlide'
    :startPersona = 'startPersona'
  ></PersonaSlide>
  <ReviewsSlide
    v-bind:class="{'slideVisibility-bottom': visibilitySlideReviews == true}"
    :visibilitySlide = 'visibilitySlide'
  ></ReviewsSlide>
</div>
</template>

<script>
import $ from 'jquery'
import StartSlide from './components/slide/startSlide.vue'
import PersonaSlide from './components/slide/personaSlide.vue'
import ReviewsSlide from './components/slide/reviewsSlide.vue'

export default {
  name: "App",
  data() {
    return {
      visiblePersonaCursor: false,

      visibilitySlideStart: true,
      visibilitySlidePersona: false,
      visibilitySlideProject: false,
      visibilitySlideReviews: false,

      startPersona: false

    };
  },
  methods: {
    visiblePersona(){
      if (window.innerWidth < 426) {
        $('.menuPage_persona').css('opacity', '0')
        setTimeout(() => {
          $('.menuPage_persona').css('display', 'none')
        }, 2000)
      }
    },

    funVisibilityImgOver() {
      this.visiblePersonaCursor = false
      $('.menuPage_persona-container').css('padding', '0')
      $('.menuPage_persona-container').css('border', 'none')
      $('#persona_container-img').css('height', '344px')
    },

    startAnimPersona() {
      if (window.innerWidth > 426) {
        this.visiblePersonaCursor = true
        setTimeout(() => {
          $('.menuPage_persona-container').css('right', '0')
          setTimeout(this.funVisibilityImgOver, 2000)
        }, 500)
      } else {
        this.visiblePersonaCursor = false
      }
    },

    visibilitySlide(name) {
      this[name] = !this[name]
    },

  },
  components: { StartSlide, PersonaSlide, ReviewsSlide }
};
</script>


