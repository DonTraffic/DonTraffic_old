<template>
    <div class="reviewsSlide slide">
        <BtnReturn
            :visibilitySlide = "visibilitySlide"
            visibilitySlideValue="visibilitySlideReviews"
            valueBtn="Отзывы"
            classBtn="top"
        />

        <div class="reviewsSlide-content">
            <div class="heading">
                Мои
                <div class="heading-container">
                    отзывы
                </div>
            </div>

            <div class="reviewsSlide_review">

                <div class="reviewsSlide_review-img">

                </div>

                <div class="reviewsSlide_review-details">

                </div>
                
            </div>

        </div>
    </div>
</template>

<script>
import BtnReturn from '../btnReturn.vue';

export default {
    name: 'reviewsSlide',
    props: {
        visibilitySlide: Function,
    },

    components: {
        BtnReturn,
    },
}
</script>