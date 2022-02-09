<template>
<div class="container main_grid">
    <div class="main_person">
        <div class="main_person-container">
            <img id="person_container-cursor" src="../assets/img/main/cursor.png" alt="cursor" draggable="false" v-if="visiblePerson">
            <img id="person_container-img" src="../assets/img/main/persona.png" alt="person" draggable="false">
        </div>
    </div>
    <div class="main_content">
        <div class="content_container">
            <div class="main_content-heading">
                <div class="content_heading-prof">
                    Привет, я
                    <div class="heading_prof-container">Web-программист</div>
                </div>
                <div class="content_heading-name">
                    Меня зовут Уханов Дмитрий
                </div>
            </div>

            <div class="main_content-button">
                <div class="content-button-container">
                    <button v-on:click="openPage('skills')">
                        <span>Ч<br/>Т<br/>О<br/></span>
                        <span>Я<br/></span>
                        <span>У<br/>М<br/>Е<br/>Ю<br/></span>
                        <span class="content_button-arrow button_arrow-one"> > </span>
                    </button>
                    <button v-on:click="openPage('persona')">
                        <span>П<br/>О<br/>Ч<br/>Е<br/>М<br/>У</span>
                        <span>Я<br/></span>
                        <span class="content_button-arrow button_arrow-two"> > </span>
                    </button>
                    <button v-on:click="openPage('project')">
                        <span>М<br/>О<br/>И<br/></span>
                        <span>П<br/>Р<br/>О<br/>Е<br/>К<br/>Т<br/>Ы</span>
                        <span class="content_button-arrow button_arrow-three"> > </span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <ProjectWindow />

</div>
</template>

<script>
import $ from 'jquery';
import ProjectWindow from './projectWindow.vue'

export default {
  name: 'mainPage',

  data() {
    return {
      visiblePerson: true,
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

  methods: {
    funVisibleImg(){
        $('.main_person-container').css('right', '0')
        setTimeout(this.funVisibleImgOver, 2000)
    },
    funVisibleImgOver() {
        this.visiblePerson = false
        $('.main_person-container').css('padding', '0')
        $('.main_person-container').css('border', 'none')
    },

    openPage(key){
        switch (key) {
            case 'project':
                $('#projectWindow').css('left', '0')
                break;
            
            case 'persona':
                $('#personaWindow').css('top', '0')
                break;

            case 'skills':
                $('#skillsWindow').css('right', '0')
                break;
        
            default:
                console.log('errors');
                break;
        }
    },

  },

  components: {ProjectWindow}

}
</script>

<style lang="scss" scoped>

.container{
    margin: 0px auto;
    max-width: 1366px;
    width: 100%;
    transition: .4s ease;
}

.main_grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #fff;

    .main_person{
        display: flex;
        justify-content: end;
        position: relative;

        .main_person-container{
            position: absolute;
            display: flex;
            right: 150%;
            height: 100%;
            transition: 2s ease;
            border: 1px solid #fff;
            padding: 35px;

            #person_container-cursor{
                position: absolute;
                height: 30px;
                top: 55%;
                left: 50%;
                z-index: 10;
            }

            #person_container-img{
                height: 105%;
            }
        }

    }

}

</style>
