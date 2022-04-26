<template>
    <div id="personaPage" class="slide">

        <div class="btn_return btn_return-right" v-on:click="closePage()">
            <span>Вернуться</span>
            <span class="content_button-arrow-right">&#62;</span>
        </div>

        <div class="heading">
            <div class="heading_prof">
                Почему
                <div class="heading_prof-container">Я</div>
            </div>
        </div>

        <div class="personaPage_content">
            <div class="personaPage_content-grid">

                <div class="personaPage_content-characteristics">
                    <div class="content_characteristics-heading">
                        <img src="../../assets/svg/pagePersona/characteristics.svg" alt="characteristics">
                        <h2>Характерные качества</h2>
                    </div>
                    <div class="content_characteristics-body">

                        <div class="characteristics_body-item">
                            <div class="body_item-text">
                                <h3>Скорость</h3>
                                <p>Вы не успеете опомниться, а задача уже будет завершена</p>
                            </div>
                            <div class="body_item-svg">
                                <img src="../../assets/svg/pagePersona/itemSpeed.svg" alt="itemSpeed">
                            </div>
                        </div>

                        <div class="characteristics_body-item">
                            <div class="body_item-svg">
                                <img src="../../assets/svg/pagePersona/itemCharacteristics.svg" alt="itemCharacteristics">
                            </div>
                            <div class="body_item-text">
                                <h3>Качество</h3>
                                <p>Если задача выполненна быстро, то это не значит что она выполненна плохо</p>
                            </div>
                        </div>

                        <div class="characteristics_body-item">
                            <div class="body_item-text">
                                <h3>Отзывы</h3>
                                <p>Уже не первый клиент доволен моими услугами, хотите быть слудующим?</p>
                            </div>
                            <div class="body_item-svg">
                                <img src="../../assets/svg/pagePersona/itemReview.svg" alt="itemReview">
                            </div>
                        </div>

                        <div class="characteristics_body-item">
                            <div class="body_item-svg">
                                <img src="../../assets/svg/pagePersona/itemKnowledge.svg" alt="itemKnowledge">
                            </div>
                            <div class="body_item-text">
                                <h3>Знания</h3>
                                <p>Возьмусь почти за любой проект, благо навыки позволяют это сделать</p>
                            </div>
                        </div>

                        <div class="characteristics_body-item">
                            <div class="body_item-text">
                                <h3>Любовь</h3>
                                <p>У меня есть самое важное, любовь к своему делу</p>
                            </div>
                            <div class="body_item-svg">
                                <img src="../../assets/svg/pagePersona/itemLove.svg" alt="itemLove">
                            </div>
                        </div>

                    </div>
                </div>

                <div class="personaPage_content-line"></div>

                <div class="personaPage_content-skill">
                    <div class="content_skill-heading">
                        <h2>Навыки владения магией</h2>
                        <img src="../../assets/svg/pagePersona/skill.svg" alt="skill">
                    </div>
                    <div class="content_skill-body">

                        <div class="skill_body-item-container">
                            <div class="skill_body-item" v-for="item in skillItems" :key="item.id">
                                <div class="body_item-progress">
                                    <div
                                        class="body_item-progress-completion"
                                        :style="`height: ${item.progress}%`"
                                    >
                                    </div>
                                </div>
                                <img class="body_item-icon" src="../../assets/svg/pagePersona/iconJS.svg" :alt="`icon${item.icon}`">
                            </div>
                        </div>

                        <div class="skill_body-button-container">
                            <div class="skill_body-button">
                                <img class="body_item-icon" src="../../assets/svg/pagePersona/skillArrow.svg" alt="iconJS">
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'projectPage',
  data() {
    return {
        skillItems: {
            0: {
                name: 'JavaScript',
                progress: 50,
                icon: 'JS'
            },
            1: {
                name: 'HTML',
                progress: 90,
                icon: 'JS'
            },
            2: {
                name: 'CSS',
                progress: 80,
                icon: 'JS'
            },
            3: {
                name: 'Nuxt',
                progress: 30,
                icon: 'JS'
            },
            4: {
                name: 'Vue',
                progress: 50,
                icon: 'JS'
            },
            // 5: {
            //     name: 'JavaScript',
            //     progress: 50,
            //     icon: 'JS'
            // },
            // 6: {
            //     name: 'HTML',
            //     progress: 90,
            //     icon: 'JS'
            // },
            // 7: {
            //     name: 'CSS',
            //     progress: 80,
            //     icon: 'JS'
            // },
            // 8: {
            //     name: 'Nuxt',
            //     progress: 30,
            //     icon: 'JS'
            // },
            // 9: {
            //     name: 'Vue',
            //     progress: 50,
            //     icon: 'JS'
            // },
        }
    }
  },
  methods: {
    closePage(){
        $('#personaPage').css('right', '101%')
    }
  },
}
</script>
