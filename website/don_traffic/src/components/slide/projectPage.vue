<template>
    <div id="projectPage" class="slide">

        <div class="btn_return btn_return-left" v-on:click="closePage()">
            <span class="content_button-arrow-left">&#60;</span>
            <span>Вернуться</span>
        </div>

        <div class="blurMask blurMask-top"></div>

        <div class="projectPage-scroll">

            <div class="projectPage-scroll-mergin"> </div>

            <div class="heading">
                <div class="heading_prof">
                    Моя скромная <div class="heading_prof-container">библиотека</div>
                </div>
            </div>

            <div class="projectPage_items">
                <div
                    class="projectPage_items-item"
                    v-for="(item, index) in projectItems" :key="index"
                    :style="`background-image: url(${item.img})`"
                >
                    <div class="projectPage_items"></div>
                    <span>{{item.heading}}</span>
                </div>
            </div>

            <div class="projectPage-scroll-mergin"> </div>

        </div>

        <div class="blurMask blurMask-bottom"></div>

    </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'projectPage',
  data() {
    return {
        projectItems: {
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
            brand8: {
                img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                heading: 'BRAND',
                description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                link: 'https://dontraffic.github.io/website/Brand/index.html'
            },
            brand9: {
                img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                heading: 'BRAND',
                description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                link: 'https://dontraffic.github.io/website/Brand/index.html'
            },
            brand10: {
                img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                heading: 'BRAND',
                description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                link: 'https://dontraffic.github.io/website/Brand/index.html'
            },
            brand11: {
                img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                heading: 'BRAND',
                description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                link: 'https://dontraffic.github.io/website/Brand/index.html'
            },
            brand12: {
                img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                heading: 'BRAND',
                description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                link: 'https://dontraffic.github.io/website/Brand/index.html'
            },
            brand13: {
                img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                heading: 'BRAND',
                description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                link: 'https://dontraffic.github.io/website/Brand/index.html'
            },
            brand14: {
                img: 'https://i.ibb.co/T1hwNY1/browser-a4zy-RLA9-Xs.png',
                heading: 'BRAND',
                description: 'Это сайт, полностью разработанный мной для закрепления изученного матерьяла',
                link: 'https://dontraffic.github.io/website/Brand/index.html'
            },

        }

    }
  },
  methods: {
    // openCard(id) {
    //     $('#projectItem' + id).addClass('active')
    // },
    closePage(){
        $('#projectPage').css('left', '101%')
    }
  },
}
</script>