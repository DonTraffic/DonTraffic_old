<template>
    <div :class="'btn_return btn_return-' + classBtn" v-on:click="visibilitySlide(visibilitySlideValue)">
        <span>{{ valueBtn }}</span>
        <svg :class="'icon content_button-arrow-' + classBtn">
            <use xlink:href="../assets/svg/sprite.svg#arrow"></use>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        visibilitySlide: Function,
        visibilitySlideValue: String,

        valueBtn: String,
        classBtn: String,

    }
}
</script>