<template>
    <div class="slider-wrapper">
        <VueSlickCarousel :arrows="true"
        :speed="250"
        :slidesToShow="2"
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
                <div class="feedback-avatar">
                    <img src="/assets/img/feedback-user.svg">
                </div>
                <div class="feedback-bottom">
                    <span>The last 2 months in Bali have been full of adventures but this last trip up to the North West region was insane 🌈</span>
                    <div class="user-info">
                        <span class="username">Christian LeBlanc,</span>
                        <span class="workspace">Digital Nomad & Videomaker</span>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="feedback-avatar">
                    <img src="/assets/img/feedback-user.svg">
                </div>
                <div class="feedback-bottom">
                    <span>As most of you know, we like to keep ourselves busy… we are the king and queen of overcommitting.</span>
                    <div class="user-info">
                        <span class="username">Jacob Riglin,</span>
                        <span class="workspace">Digital Nomad & Videomaker</span>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="feedback-avatar">
                    <img src="/assets/img/feedback-user.svg">
                </div>
                <div class="feedback-bottom">
                    <span>The last 2 months in Bali have been full of adventures but this last trip up to the North West region was insane 🌈</span>
                    <div class="user-info">
                        <span class="username">Christian LeBlanc,</span>
                        <span class="workspace">Digital Nomad & Videomaker</span>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="feedback-avatar">
                    <img src="/assets/img/feedback-user.svg">
                </div>
                <div class="feedback-bottom">
                    <span>As most of you know, we like to keep ourselves busy… we are the king and queen of overcommitting.</span>
                    <div class="user-info">
                        <span class="username">Jacob Riglin,</span>
                        <span class="workspace">Digital Nomad & Videomaker</span>
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
    gap: 32px;
    background: #F7F7F7;
    border-radius: 20px;
    min-width: 312px;
    width: 312px !important;
    padding: 24px;
}

.feedback-avatar>img {
    width: 88px;
    height: 88px;
    border-radius: 16px;
}

.feedback-bottom {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.feedback-bottom>span {
    font-family: 'Tarnac';
    font-weight: 400;
    min-height: 120px;
}

.user-info {
    display: flex;
    flex-direction: column;
    font-family: 'Tarnac';
}

.username {
    font-weight: 700;
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
