<template>
    <div class="slider-wrapper">
        <VueSlickCarousel :arrows="true" :infinite="true"
        :initialSlide="2"
        :speed="250"
        :slidesToShow="3"
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
                <div class="gradient-top"></div>
                <span class="slide-label">ARRI Alexa Mini Camera</span>
                <img src="/assets/img/popular_products-1-img.png">
                <div class="price-container">
                    <span class="price-title">from</span>
                    <div class="price">
                        <span>$1200</span>
                        <span class="decimals">00</span>
                    </div>
                </div>
                <div class="gradient-bottom"></div>
            </div>
            <div class="slide">
                <div class="gradient-top"></div>
                <span class="slide-label">Sony Alpha a7S III Mirrorless Digital Camera</span>
                <img src="/assets/img/popular_products-2-img.png">
                <div class="price-container">
                    <span class="price-title">from</span>
                    <div class="price">
                        <span>$1200</span>
                        <span class="decimals">00</span>
                    </div>
                </div>
                <div class="gradient-bottom"></div>
            </div>
            <div class="slide">
                <div class="gradient-top"></div>
                <span class="slide-label">RED Komodo 6K Digital Cinema Camera</span>
                <img src="/assets/img/popular_products-3-img.png">
                <div class="price-container">
                    <span class="price-title">from</span>
                    <div class="price">
                        <span>$1200</span>
                        <span class="decimals">00</span>
                    </div>
                </div>
                <div class="gradient-bottom"></div>
            </div>
            
            <div class="slide">
                <div class="gradient-top"></div>
                <span class="slide-label">ARRI Alexa Mini Camera</span>
                <img src="/assets/img/popular_products-1-img.png">
                <div class="price-container">
                    <span class="price-title">from</span>
                    <div class="price">
                        <span>$1200</span>
                        <span class="decimals">00</span>
                    </div>
                </div>
                <div class="gradient-bottom"></div>
            </div>
            <div class="slide">
                <div class="gradient-top"></div>
                <span class="slide-label">Sony Alpha a7S III Mirrorless Digital Camera</span>
                <img src="/assets/img/popular_products-2-img.png">
                <div class="price-container">
                    <span class="price-title">from</span>
                    <div class="price">
                        <span>$1200</span>
                        <span class="decimals">00</span>
                    </div>
                </div>
                <div class="gradient-bottom"></div>
            </div>
            <div class="slide">
                <div class="gradient-top"></div>
                <span class="slide-label">RED Komodo 6K Digital Cinema Camera</span>
                <img src="/assets/img/popular_products-3-img.png">
                <div class="price-container">
                    <span class="price-title">from</span>
                    <div class="price">
                        <span>$1200</span>
                        <span class="decimals">00</span>
                    </div>
                </div>
                <div class="gradient-bottom"></div>
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
        display: inline-block;
        width: 248px !important;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        cursor: pointer;
        transition: .2s;
    }

    .slide:hover img {
        transform: scale(1.05);
        transition: .2s;
    }

    .slide::before {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        background: #000;
        height: 24px;
        z-index: 1;
    }

    .gradient-top {
        position: absolute;
        top: 24px;
        left: 0;
        width: 100%;
        height: 104px;
        background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
        z-index: 1;
    }

    .slide-label {
        position: absolute;
        top: 20px;
        left: 20px;
        max-width: 204px;
        font-size: 22px;
        text-align: left;
        color: #fff;
        z-index: 2;
    }

    .slide>img {
        height: 320px;
        transition: .2s;
    }

    .price-container {
        position: absolute;
        bottom: 20px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-start;
        color: #fff;
        font-family: 'Tarnac';
        font-weight: 400;
    }

    .price-title {
        font-size: 12px;
        text-transform: uppercase;
    }

    .price {
        color: #F64;
        position: relative;
    }

    .price>span:first-child {
        font-size: 32px;
    }

    .decimals {
        position: absolute;
        margin-left: 4px;
    }

    .gradient-bottom {
        position: absolute;
        bottom: 40px;
        left: 0;
        width: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        height: 116px;
    }

    .slide::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 40px;
        background: #000;
    }
    </style>
