<template>
    <div class="slider-wrapper">
        <VueSlickCarousel :arrows="true"
        :initialSlide="1"
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
                <div class="slide-img">
                    <img src="/assets/img/fresh-1-img.png">
                    <span class="events">Student discount</span>
                </div>
                <div class="slide-desc">
                    <div class="slide-owner">
                        <img src="/assets/img/user-avatar.png">
                        <span>Mykhailo Karpenko</span>
                    </div>
                    <span class="slide-title">New Sony A1 camera available for rent on shootmode</span>
                    <div class="slide-price">
                        <span class="days">day / weekend</span>
                        <div class="price-container">
                            <span class="price">$1200</span>
                            <span class="decimals">00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="slide-img">
                    <img src="/assets/img/fresh-2-img.png">
                    <span class="events">Student discount</span>
                </div>
                <div class="slide-desc">
                    <div class="slide-owner">
                        <img src="/assets/img/user-avatar.png">
                        <span>Mykhailo Karpenko</span>
                    </div>
                    <span class="slide-title">New Sony A1 camera available for rent on shootmode</span>
                    <div class="slide-price">
                        <span class="days">day / weekend</span>
                        <div class="price-container">
                            <span class="price">$1200</span>
                            <span class="decimals">00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="slide-img">
                    <img src="/assets/img/fresh-3-img.png">
                    <span class="events">Student discount</span>
                </div>
                <div class="slide-desc">
                    <div class="slide-owner">
                        <img src="/assets/img/user-avatar.png">
                        <span>Mykhailo Karpenko</span>
                    </div>
                    <span class="slide-title">New Sony A1 camera available for rent on shootmode</span>
                    <div class="slide-price">
                        <span class="days">day / weekend</span>
                        <div class="price-container">
                            <span class="price">$1200</span>
                            <span class="decimals">00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="slide-img">
                    <img src="/assets/img/fresh-1-img.png">
                    <span class="events">Student discount</span>
                </div>
                <div class="slide-desc">
                    <div class="slide-owner">
                        <img src="/assets/img/user-avatar.png">
                        <span>Mykhailo Karpenko</span>
                    </div>
                    <span class="slide-title">New Sony A1 camera available for rent on shootmode</span>
                    <div class="slide-price">
                        <span class="days">day / weekend</span>
                        <div class="price-container">
                            <span class="price">$1200</span>
                            <span class="decimals">00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="slide-img">
                    <img src="/assets/img/fresh-2-img.png">
                    <span class="events">Student discount</span>
                </div>
                <div class="slide-desc">
                    <div class="slide-owner">
                        <img src="/assets/img/user-avatar.png">
                        <span>Mykhailo Karpenko</span>
                    </div>
                    <span class="slide-title">New Sony A1 camera available for rent on shootmode</span>
                    <div class="slide-price">
                        <span class="days">day / weekend</span>
                        <div class="price-container">
                            <span class="price">$1200</span>
                            <span class="decimals">00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="slide-img">
                    <img src="/assets/img/fresh-3-img.png">
                    <span class="events">Student discount</span>
                </div>
                <div class="slide-desc">
                    <div class="slide-owner">
                        <img src="/assets/img/user-avatar.png">
                        <span>Mykhailo Karpenko</span>
                    </div>
                    <span class="slide-title">New Sony A1 camera available for rent on shootmode</span>
                    <div class="slide-price">
                        <span class="days">day / weekend</span>
                        <div class="price-container">
                            <span class="price">$1200</span>
                            <span class="decimals">00</span>
                        </div>
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
    name: 'FreshSlider',
    components: {
        VueSlickCarousel
    }
}
</script>


<style scoped>
.slide {
    display: flex !important;
    flex-direction: column;
    gap: 20px;
    background: #F7F7F7;
    border-radius: 16px;
    min-width: 248px;
    width: 248px !important;
}

.slide-img {
    position: relative;
}

.slide-img>img {
    max-width: 248px;
}

.events {
    position: absolute;
    padding: 4px 8px;
    left: 16px;
    top: 16px;
    background: #FF6644;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
    border-radius: 6px;
    color: #fff;
    font-family: 'Tarnac';
    font-weight: 400;
}

.slide-desc {
    padding: 0 20px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.slide-owner {
    display: flex;
    gap: 8px;
    align-items: center;
}

.slide-owner>img {
    max-width: 20px;
}

.slide-owner>span {
    font-size: 14px;
    font-family: 'Tarnac';
    font-weight: 400;
}

.slide-title {
    font-size: 20px;
    text-align: left;
}

.slide-price {
    margin-top: 2px;
    text-align: left;
}

.days {
    text-transform: uppercase;
    font-size: 12px;
    font-family: 'Tarnac';
    font-weight: 400;
}

.price-container {
    font-size: 24px;
    position: relative;
    font-family: 'Tarnac';
    font-weight: 400;
}

.decimals {
    font-size: 14px;
    position: absolute;
    margin-left: 4px;
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
</style>
