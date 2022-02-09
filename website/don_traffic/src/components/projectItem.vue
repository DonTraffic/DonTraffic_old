<template>
    <div :id="'projectItem' + item.id" class="projectItem">
        <div class="projectItem_scroll">
            <div class="projectItem_card-close" v-on:click="closeCard(item.id)"><span>></span> Вернуться</div>
            <div class="projectItem_card" v-for="card of item.cards" :key="card">
                <div class="projectItem_card-img" :style="'background-image: url(' + card.img + ');'"></div>
                <div class="projectItem_card-container">
                    <div class="projectItem_card-heading">{{ card.heading }}</div>
                    <div class="projectItem_card-description">{{ card.description }}</div>
                    <div class="projectItem_card-link"><a :href="card.link">Перейти на страницу ➣</a></div>
                </div>
            </div>
            <div class="projectItem_card-close" v-on:click="closeCard(item.id)"><span>></span> Вернуться</div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'projectItem',
    props: {
        item: Object,
    },
    methods: {
        closeCard(id) {
            $('#projectItem' + id).removeClass('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.projectItem{
    height: 0;
    width: 0;

    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #000000;
    z-index: 20;
    cursor: default;
    overflow: hidden;
    transition: 1s ease;
    outline: 0px solid white;


    .projectItem_scroll{
        height: 100%;
        overflow-y: scroll;
        // padding-right: 8px;

        .projectItem_card-close{
            height: 110px;
            display: flex;
            align-items: center;
            justify-content: center;

            font-weight: 500;
            font-size: 24px;
            font-family: "Kashima";

            transition: .4s ease;
            margin: 16px;
            border-radius: 4px;

            span{
                font-family: "Kashima";
                transform: rotate(180deg);
                display: block;
                height: 21px;
                margin-right: 4px;
            }

            &:hover{
                cursor: pointer;
                background-color: white;
                color: black;
            }

            // &:first-child{
            //     margin-top: 400px;
            // }
            // &:last-child{
            //     margin-bottom: 400px;
            // }

        }

        .projectItem_card{
            height: 220px;

            display: flex;

            font-weight: normal;
            color: #000000;

            margin-bottom: 16px;
            
            .projectItem_card-img{
                height: 100%;
                width: 320px;

                background-position: top;
                background-size: cover;
                background-repeat: no-repeat;

                border-radius: 4px;

            }

            .projectItem_card-container{
                width: 470px;

                background: #FFFFFF;
                border: 1px solid #FFFFFF;
                border-radius: 4px;

                margin-left: 8px;
                padding: 16px;

                display: flex;
                flex-direction: column;

                .projectItem_card-heading {
                    font-size: 25px;
                    line-height: 30px;
                }
                .projectItem_card-description {
                    font-size: 16px;
                    line-height: 20px;
                    flex-grow: 1;
                    padding: 8px 0;
                }
                .projectItem_card-link {
                    font-size: 12px;
                    line-height: 15px;
                    display: flex;
                    align-items: end;
                    a{
                        color: #000000;
                        text-decoration: none;
                    }
                }

            }

        }

    }

}

.active{
    width: 100vw;
    height: 100vh;
    outline: 1px solid white;
}
</style>
