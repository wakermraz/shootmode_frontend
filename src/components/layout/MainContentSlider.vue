<template>
    <div class="slider-wrapper">
        <VueSlickCarousel :arrows="true" :autoplay="true" :pauseOnFocus="true" :dots="true">
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
            <div>
                <img src="/assets/img/slider-image.png">
                <div class="btns">
                    <div class="find-gear">
                        <span>Find a right gear</span>
                    </div>
                    <div class="lease-gear">
                        <span>Lease your gear</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/img/slider-image.png">
                <div class="btns">
                    <div class="find-gear">
                        <span>Find a right gear</span>
                    </div>
                    <div class="lease-gear">
                        <span>Lease your gear</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/img/slider-image.png">
                <div class="btns">
                    <div class="find-gear">
                        <span>Find a right gear</span>
                    </div>
                    <div class="lease-gear">
                        <span>Lease your gear</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/img/slider-image.png">
                <div class="btns">
                    <div class="find-gear">
                        <span>Find a right gear</span>
                    </div>
                    <div class="lease-gear">
                        <span>Lease your gear</span>
                    </div>
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
    name: 'MainContentSlider',
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
    
    .find-gear {
        background: #FF6644;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
        border-radius: 40px;
        color: #fff;
        padding: 12px 24px;
        cursor: pointer;
        font-size: 20px;
    }
    
    .lease-gear {
        border: 1px solid #FF6644;
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.02));
        border-radius: 40px;
        color: #F64;
        padding: 12px 24px;
        cursor: pointer;
        font-size: 20px;
    }
    
    .left-arrow {
        background: #FFFFFF;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 8px 32px rgba(0, 0, 0, 0.04);
        border-radius: 32px;
        display: flex;
        padding: 12px;
        width: 48px;
        height: 48px;
        left: -15px;
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
        right: 60px;
    }
    
    .right-arrow::before,
    .left-arrow::before {
        display: none
    }
    </style>
