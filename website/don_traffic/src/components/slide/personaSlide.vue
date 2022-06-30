<template>
    <div class="personaSlide slide">

        <BtnReturn
            :visibilitySlide = "visibilitySlide"
            visibilitySlideValue="visibilitySlidePersona"
            valueBtn="Вернуться"
            classBtn="right"
        />

        <div class="heading">
            Почему
            <div class="heading-container">
                я
            </div>
        </div>

        <div class="personaSlide-content">

            <div class="personaSlide_quality" v-bind:class="{'positionActive': positionActive}">
                <h2>
                    <svg class="icon">
                        <use xlink:href="../../assets/svg/sprite.svg#characteristics"></use>
                    </svg>
                    Мои качества
                </h2>
                <div class="personaSlide_quality-grid">
                    <div class="quality_speed-text quality_grid-text">
                        <h3>Скорость</h3>
                        <p>Вы не успеете опомниться, а задача уже бедет завершена</p>
                    </div>
                    <div class="quality_speed-icon quality_grid-icon">
                        <svg class="icon">
                            <use xlink:href="../../assets/svg/sprite.svg#itemSpeed"></use>
                        </svg>
                    </div>

                    <div class="quality_quality-text quality_grid-text">
                        <h3>Качество</h3>
                        <p>Если задача выполненна быстро, то это не значит, что она выполненна плохо</p>
                    </div>
                    <div class="quality_quality-icon quality_grid-icon">
                        <svg class="icon">
                            <use xlink:href="../../assets/svg/sprite.svg#itemCharacteristics"></use>
                        </svg>
                    </div>

                    <div class="quality_reviews-text quality_grid-text">
                        <h3>Отзывы</h3>
                        <p>Уже не первый клиент доволен моей работой, хотите быть следующим?</p>
                    </div>
                    <div class="quality_reviews-icon quality_grid-icon">
                        <svg class="icon">
                            <use xlink:href="../../assets/svg/sprite.svg#itemReview"></use>
                        </svg>
                    </div>

                    <div class="quality_love-text quality_grid-text">
                        <h3>Любовь</h3>
                        <p>У меня есть самое важное, любовь к своему делу</p>
                    </div>
                    <div class="quality_love-icon quality_grid-icon">
                        <svg class="icon">
                            <use xlink:href="../../assets/svg/sprite.svg#itemLove"></use>
                        </svg>
                    </div>

                </div>

            </div>

            <div class="personaSlide-button-container" v-on:click="positionActive = !positionActive" v-bind:class="{'positionActive': positionActive}">
                <div class="personaSlide-button">
                    <svg class="icon">
                        <use xlink:href="../../assets/svg/sprite.svg#arrow"></use>
                    </svg>
                </div>
            </div>

            <div class="personaSlide-border"></div>

            <div class="personaSlide_magic" v-bind:class="{'positionActive': positionActive}">
                <h2>
                    Навыки магии
                    <svg class="icon">
                        <use xlink:href="../../assets/svg/sprite.svg#magic"></use>
                    </svg>
                </h2>

                <Carousel class="personaSlide_magic-slider" :items-to-show="quantitySlide()" :wrap-around="true">
                    <Slide class="magic_slider-slide" v-for="slide in sliderData" :key="slide.title">
                        <div class="slider_slide-item">
                            <div class="slide_item-progressBar">
                                <div class="item_progressBar-value" :id="`progressBar_value-${slide.name}`"></div>
                            </div>
                            <div class="slide_item-icon" :style="`font-size:${slide.size}px`" v-on:click="testLog();
                            ">
                                {{slide.name}}
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>

            </div>

        </div>

        <BtnReturn
            :visibilitySlide = "visibilitySlide"
            visibilitySlideValue="visibilitySlideReviews"
            valueBtn="Отзывы"
            classBtn="bottom"
        />

    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import $ from 'jquery'
import BtnReturn from '../btnReturn.vue';

export default {
    name: "StartSlide",
    props: {
        visibilitySlide: Function,
        startPersona: Boolean,
    },
    data() {
        return {
            positionActive: false,
            sliderData: {
                JS: {
                    title: 'JavaScript',
                    name: 'JS',
                    value: 40,
                    size: 12,
                },
                HTML: {
                    title: 'HTML',
                    name: 'HTML',
                    value: 90,
                    size: 12,
                },
                CSS: {
                    title: 'CSS',
                    name: 'CSS',
                    value: 90,
                    size: 12,
                },
                SCSS: {
                    title: 'SCSS',
                    name: 'SCSS',
                    value: 90,
                    size: 12,
                },
                Vue: {
                    title: 'Vue',
                    name: 'VUE',
                    value: 80,
                    size: 12,
                },
                Nuxt: {
                    title: 'Nuxt',
                    name: 'NUXT',
                    value: 60,
                    size: 12,
                },
            }
        };
    },
    mounted() {
        this.$watch('startPersona', () => {
            for (const item in this.sliderData) {
                setTimeout(() => {
                    $('#progressBar_value-' + this.sliderData[item].name).css('height', this.sliderData[item].value + '%');
                }, 1000)
            }
        })
    },
    methods: {
        testLog() {
            console.log('Нужна модалка с выводом инфы по языку')
        },

        quantitySlide() {
            if($(document).width() > 768) {
                return 5
            } else if ($(document).width() <= 768 && $(document).width() >= 425) {
                return 3
            } else {
                return 3
            }
        },  
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        BtnReturn,
    },

};
</script>