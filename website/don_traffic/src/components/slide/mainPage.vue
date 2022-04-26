<template>
<div class="container menuPage">
    <div class="menuPage_person">
        <div class="menuPage_person-container" v-on:click="visiblePerson()">
            <img id="person_container-cursor" src="../../assets/img/main/cursor.png" alt="cursor" draggable="false" v-if="visiblePersonCursor">
            <img id="person_container-img" src="../../assets/img/main/persona.png" alt="person" draggable="false">
        </div>
    </div>
    <div class="menuPage_content">
        <div class="menuPage_content-container">
            <div class="heading">
                <div class="heading_prof">
                    Привет, я
                    <div class="heading_prof-container">Web-программист</div>
                </div>
                <div class="heading_name">
                    Меня зовут Уханов Дмитрий
                </div>
            </div>

            <div class="menuPage_content-button">
                <button v-on:click="openPage('persona')">
                    <span class="content_button-arrow content_button-arrow-left"> &#60; </span>
                    <span>Почему я</span>
                </button>
                <button v-on:click="openPage('project')">
                    <span>Мои Проекты</span>
                    <span class="content_button-arrow content_button-arrow-right"> &#62; </span>
                </button>
            </div>
        </div>
    </div>

    <ProjectPage />

    <PersonaPage />

</div>
</template>

<script>
import $ from 'jquery';
import ProjectPage from './projectPage.vue'
import PersonaPage from './personaPage.vue'

export default {
  name: 'mainPage',

  data() {
    return {
      visiblePersonCursor: true,
    }
  },

  props: {
    startAnimMain: Boolean,
  },

  watch: {
    startAnimMain:function(){
        setTimeout(this.funVisibleImg, 500)
    }
  },

  mounted() {
    if (window.innerWidth < 426) {
        this.visiblePersonCursor = false
    }
  },

  methods: {
    visiblePerson(){
        if (window.innerWidth < 426) {
            $('.menuPage_person').css('opacity', '0')
            setTimeout(this.visiblePersonOver, 2000)
        }
    },
    visiblePersonOver(){
        $('.menuPage_person').css('display', 'none')
    },

    funVisibleImg(){
        $('.menuPage_person-container').css('right', '0')
        setTimeout(this.funVisibleImgOver, 2000)
    },
    funVisibleImgOver() {
        this.visiblePersonCursor = false
        $('.menuPage_person-container').css('padding', '0')
        $('.menuPage_person-container').css('border', 'none')
    },

    openPage(key){
        switch (key) {
            case 'project':
                $('#projectPage').css('left', '0')
                break;
            
            case 'persona':
                $('#personaPage').css('right', '0')
                break;

            default:
                console.log('errors');
                break;
        }
    },

  },

  components: {ProjectPage, PersonaPage}

}
</script>