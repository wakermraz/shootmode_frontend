<template>
    <div class="main-content">
        <div class="container popular-in-category">
            <div class="container-title">
                <span class="title-left">popular products in category</span>
                <div class="see-all">
                    <span>see all</span>
                    <img src="/assets/img/chevron-right-orange-icon.svg">
                </div>
            </div>
            <PopularInCategory></PopularInCategory>
        </div>
        <div class="container popular-in-category">
            <div class="container-title">
                <span class="title-left">Audio Packages</span>
                <div class="see-all">
                    <span>see all</span>
                    <img src="/assets/img/chevron-right-orange-icon.svg">
                </div>
            </div>
            <FreshSlider></FreshSlider>
        </div>
        <div class="container popular-in-category">
            <div class="container-title">
                <span class="title-left">Boom/Shotgun</span>
                <div class="see-all">
                    <span>see all</span>
                    <img src="/assets/img/chevron-right-orange-icon.svg">
                </div>
            </div>
            <FreshSlider></FreshSlider>
        </div>
        <div class="container popular-in-category">
            <div class="container-title">
                <span class="title-left">Other</span>
                <div class="see-all">
                    <span>see all</span>
                    <img src="/assets/img/chevron-right-orange-icon.svg">
                </div>
            </div>
            <FreshSlider></FreshSlider>
        </div>
    </div>
</template>

    <script>
import PopularInCategory from './PopularInCategory.vue'
import FreshSlider from './FreshSlider.vue'
export default {
    name: 'MainContent',
    components: {
        PopularInCategory,
        FreshSlider
    }
}
</script>


    <style scoped>
    .main-content {
        margin-left: 320px;
        display: flex;
        flex-direction: column;
    }

    .container {
        padding: 32px 96px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .container-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: Tarnac;
        text-transform: uppercase;
    }

    .see-all {
        display: flex;
        gap: 8px;
        align-items: center;
        color: #f64;
        cursor: pointer;
    }
    </style>
