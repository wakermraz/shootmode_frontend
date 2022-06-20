<template>
    <div class="slider-wrapper">
        <VueSlickCarousel :arrows="true" :infinite="true"
        :initialSlide="2"
        :speed="250"
        :slidesToShow="5"
        :slidesToScroll="1"
        :swipeToSlide="true">
            <template #prevArrow>
                <div class="left-arrow">
                    <img src="/assets/img/arrow-left-gray-icon.svg">
                </div>
            </template>
            <template #nextArrow>
                <div class="right-arrow">
                    <img src="/assets/img/arrow-right-gray-icon.svg">
                </div>
            </template>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/cameras-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Cinema Lenses</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/lenses-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Wireless Monitors / Tra...</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/lightning-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Lighting</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/audio-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Audio equipment</span>
                </div>
            </div>

            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/cameras-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Cinema Lenses</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/lenses-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Wireless Monitors / Tra...</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/lightning-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Lighting</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/audio-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Audio equipment</span>
                </div>
            </div>

            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/cameras-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Cinema Lenses</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/lenses-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Wireless Monitors / Tra...</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/lightning-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Lighting</span>
                </div>
            </div>
            <div class="slide">
                <div class="popular-image">
                    <img src="/assets/img/audio-icon.svg">
                </div>
                <div class="popular-title">
                    <span>Audio equipment</span>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

    <script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'PopularSlider',
    components: {
        VueSlickCarousel
    }
}
</script>


    <style scoped>
    .main-content-slider {
        overflow: hidden;
        display: flex;
        position: relative;
    }
    
    .slider-wrapper {
        display: flex;
        justify-content: center;
        padding: 16px 34px 42px 16px;
        align-items: center;
    }
    
    .slider-image {
        width: 100%;
    }
    
    .btns {
        position: absolute;
        bottom: 90px;
        margin-left: 47px;
        display: flex;
        gap: 16px;
    }
    
    .slick-slider {
        width: 100%;
    }
    
    .popular-image {
        display: flex;
        background: #F7F7F7;
        border-radius: 24px;
        justify-content: center;
        align-items: center;
        max-width: 136px;
    }
    
    .popular-image>img {
        width: 136px;
        height: 136px;
    }
    
    .popular-title {
        font-size: 20px;
        max-width: 136px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
    
    .left-arrow {
        background: #FFFFFF;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 8px 32px rgba(0, 0, 0, 0.04);
        border-radius: 32px;
        display: flex;
        padding: 12px;
        width: 48px;
        height: 48px;
        left: -35px;
        z-index: 1;
    }
    
    .right-arrow {
        background: #FFFFFF;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 8px 32px rgba(0, 0, 0, 0.04);
        border-radius: 32px;
        display: flex;
        padding: 12px;
        width: 48px;
        height: 48px;
        right: -5px;
    }
    
    .right-arrow::before,
    .left-arrow::before {
        display: none
    }
    
    .slide {
        display: flex;
        flex-direction: column;
        gap: 16px;
        cursor: pointer
    }
    </style>
