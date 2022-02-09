<template>
    <div id="projectWindow">
        <div class="btn_return" v-on:click="closePage()"><span>></span> Вернуться</div>
        <div class="main_content">
            <div class="content_container">
                <div class="main_content-heading">
                    <div class="content_heading-prof">
                        Моя скромная библиотека 
                        <div class="heading_prof-container">проектов</div>
                    </div>
                </div>
                <div class="main_content-project">
                    <div
                        class="content_project-item"
                        v-on:click="openCard(item.id)"
                        v-for="item of projectItems" :key="item.id"
                    >
                        <div class="project_item-heading">{{ item.heading }}</div>
                        <img :src="item.img" :alt="item.heading" class="project_item-img">
                    </div>
                </div>
            </div>
        </div>
        <ProjectItem
            v-for="item of projectItems" :key="item.id"
            :item="item"
        />
    </div>
</template>

<script>
import $ from 'jquery';
import ProjectItem from './projectItem.vue'

export default {
  name: 'projectWindow',
  data() {
    return {
        projectItems: {
            0: {
                id: 'Web',
                heading: 'Веб-сайты',
                img: 'https://i.ibb.co/jwrNv2m/web-site.png',
                cards: {
                    brand: {
                        img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                        heading: 'BRAND',
                        description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                        link: 'https://dontraffic.github.io/website/Brand/index.html'
                    },
                    brand2: {
                        img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                        heading: 'BRAND',
                        description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                        link: 'https://dontraffic.github.io/website/Brand/index.html'
                    },
                    brand3: {
                        img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                        heading: 'BRAND',
                        description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                        link: 'https://dontraffic.github.io/website/Brand/index.html'
                    },
                    brand4: {
                        img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                        heading: 'BRAND',
                        description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                        link: 'https://dontraffic.github.io/website/Brand/index.html'
                    },
                    brand5: {
                        img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                        heading: 'BRAND',
                        description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                        link: 'https://dontraffic.github.io/website/Brand/index.html'
                    },
                    brand6: {
                        img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                        heading: 'BRAND',
                        description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                        link: 'https://dontraffic.github.io/website/Brand/index.html'
                    },
                    brand7: {
                        img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                        heading: 'BRAND',
                        description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                        link: 'https://dontraffic.github.io/website/Brand/index.html'
                    },
                }
            },
            // 1: {
            //     id: 'Game',
            //     heading: 'Игры',
            //     img: 'https://i.ibb.co/G52mR3c/game-controller.png',
            // }
        }
    }
  },
  methods: {
    openCard(id) {
        $('#projectItem' + id).addClass('active')
    },
    closePage(){
        $('#projectWindow').css('left', '101%')
    }
  },
  components: {ProjectItem}
}
</script>

<style lang="scss" scoped>
#projectWindow{
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 101%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    outline: 1px solid white;
    transition: 1s ease;
}

.main_content-project{
    display: flex;
    justify-content: center;

    .content_project-item{
        width: 280px;
        height: 170px;
        margin-left: 8px;

        background: #FFFFFF;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        overflow: hidden;

        .project_item-heading{
            transition: 1s ease;
            font-weight: normal;
            font-size: 25px;
            line-height: 30px;
            color: #000000;
            height: 100%;
            position: relative;
            top: 50px;
            display: flex;
            align-items: center;
        }

        .project_item-img{
            transition: 2s ease;
            height: 100px;
            position: relative;
            top: 100%;
        }

        &:hover{
            cursor: pointer;

            .project_item-heading{
                transition: .5s ease;
                height: fit-content;
                top: 0px;
                display: flex;
                align-items: center;
            }

            .project_item-img{
                transition: .5s ease;
                top: 0;
            }


        }

        &:nth-child(1){
            margin-left: 0;
        }

    }

}

// .projectWindow_modal{
//     position: absolute;
//     height: 100vh;
//     width: 100vw;
//     z-index: -1;
// }

</style>