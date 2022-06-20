<template>
    <div class="main-content">
        <div class="container slider">
            <MainContentSlider></MainContentSlider>
        </div>
        <div class="container popular">
            <div class="popular-top">
                <span class="popular-title">POPULAR CATEGORIES</span>
                <router-link class="see-all" to="/popular-categories">
                    <span>SEE ALL</span>
                    <img src="/assets/img/chevron-right-orange-icon.svg">
                </router-link>
            </div>
            <PopularSlider></PopularSlider>
        </div>
        <div class="container steps">
            <span class="steps-title">Three steps to <font>rent</font> equipment for your next project</span>
            <div class="steps">
                <div class="step">
                    <div class="step-img">
                        <img src="/assets/img/steps-1-icon.png">
                    </div>
                    <div class="step-description">
                        <span class="description-title">Find the right gear or studio</span>
                        <span class="description-content">Use a search bar along with multiple filters to find exactly what you require</span>
                    </div>
                </div>
                <div class="arrow">
                    <img src="/assets/img/steps-arrow-icon.svg">
                </div>
                <div class="step">
                    <div class="step-img">
                        <img src="/assets/img/steps-2-icon.png">
                    </div>
                    <div class="step-description">
                        <span class="description-title">See reviews and rating </span>
                        <span class="description-content">Check reviews from the latest borrowers on the profile page</span>
                    </div>
                </div>
                <div class="arrow">
                    <img src="/assets/img/steps-arrow-icon.svg">
                </div>
                <div class="step">
                    <div class="step-img">
                        <img src="/assets/img/steps-3-icon.png">
                    </div>
                    <div class="step-description">
                        <span class="description-title">Send a booking request</span>
                        <span class="description-content">Once approved, pick up your gear from your local creatives or check-in to studio</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container fresh">
            <div class="fresh-title">
                <span>fresh listed</span>
                <router-link class="see-all" to="/fresh-listed">
                    <span>SEE ALL</span>
                    <img src="/assets/img/chevron-right-orange-icon.svg">
                </router-link>
            </div>
            <FreshSlider></FreshSlider>
        </div>
        <div class="container banners">
            <img src="/assets/img/banner-big.png">
            <img src="/assets/img/banner-sm.png">
        </div>
        <div class="container brands">
            <div class="brands-title">
                <span>popular brands</span>
                <router-link class="see-all" to="/brands">
                    <span>SEE ALL</span>
                    <img src="/assets/img/chevron-right-orange-icon.svg">
                </router-link>
            </div>
            <BrandsSlider></BrandsSlider>
        </div>
        <div class="container promotion">
            <div class="promotion-wrapper">
                <div class="promotion-title">
                    <span class="subtitle">For renters</span>
                    <div class="title">Borrow camera equipment or rent a studio for your project from <font>locals</font></div>
                </div>
                <div class="promotion-blocks">
                    <div class="promotion-block">
                        <span class="promotion-block-title">Find equipment for your project</span>
                        <div class="promotion-block-link">
                            <span>Find equipment</span>
                            <img src="/assets/img/arrow-right-orange-icon.svg">
                        </div>
                    </div>
                    <div class="promotion-block">
                        <span class="promotion-block-title">Find a space for your project</span>
                        <div class="promotion-block-link">
                            <span>Find location</span>
                            <img src="/assets/img/arrow-right-orange-icon.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container popular-products">
            <div class="popular-top">
                <span class="popular-title">POPULAR PRODUCTS</span>
                <router-link class="see-all" to="/popular-categories">
                    <span>SEE ALL</span>
                    <img src="/assets/img/chevron-right-orange-icon.svg">
                </router-link>
            </div>
            <PopularProductsSlider></PopularProductsSlider>
        </div>
        <div class="container promotion">
            <div class="promotion-wrapper">
                <div class="promotion-title">
                    <span class="subtitle">For equipment / location owners</span>
                    <div class="title">Put your gear to work while you're <font>not using it</font></div>
                </div>
                <div class="promotion-blocks">
                    <div class="promotion-block">
                        <span class="promotion-block-title">Add your equiment</span>
                        <div class="promotion-block-link">
                            <span>Add listing</span>
                            <img src="/assets/img/arrow-right-orange-icon.svg">
                        </div>
                    </div>
                    <div class="promotion-block">
                        <span class="promotion-block-title">Add your location or studio </span>
                        <div class="promotion-block-link">
                            <span>Add location</span>
                            <img src="/assets/img/arrow-right-orange-icon.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container subscription">
            <img src="/assets/img/subscription-banner-img.png">
            <div class="subscription-btns">
                <div class="subscription-btn subscribe">
                    <span>Subscribe</span>
                </div>
                <div class="subscription-btn learn-more">
                    <span>Learn more</span>
                </div>
            </div>
        </div>
        <div class="container feedback">
            <span class="feedback-title">Trusted by <font>professionals</font> from different creative fields</span>
            <FeedbackSlider></FeedbackSlider>
        </div>
    </div>
</template>

    <script>
import MainContentSlider from './MainContentSlider.vue'
import PopularSlider from './PopularSlider.vue'
import FreshSlider from './FreshSlider.vue'
import BrandsSlider from './BrandsSlider.vue'
import PopularProductsSlider from './PopularProductsSlider.vue'
import FeedbackSlider from './FeedbackSlider.vue'
export default {
    name: 'MainContent',
    components: {
        MainContentSlider,
        PopularSlider,
        FreshSlider,
        BrandsSlider,
        PopularProductsSlider,
        FeedbackSlider
    }
}
</script>


    <style scoped>
    .main-content {
        margin-left: 288px;
        display: flex;
        flex-direction: column;
    }
    
    .container.popular {
        padding: 32px 96px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    .popular-top {
        display: flex;
        align-items: center;
        font-family: 'Tarnac';
        font-weight: 700;
    }
    
    .popular-title {
        margin-left: 16px;
        width: 100%;
        text-align: left;
        font-family: 'Tarnac';
        font-weight: 400;
    }
    
    .see-all {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        color: #FF6644;
    }
    
    .see-all>span {
        white-space: nowrap;
    }

    .container.steps {
        padding: 80px 112px 112px 112px;
        display: flex;
        flex-direction: column;
        gap: 56px;
    }

    .step-img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .steps-title {
        font-size: 44px;
        text-align: left;
        max-width: 624px;
    }

    .steps-title>font {
        color: #F64;
    }

    .steps {
        display: flex;
    }

    .step {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 272px;
    }

    .step-description {
        display: flex;
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }

    .description-title {
        font-size: 20px;
    }

    .arrow {
        display: flex;
    }

    .container.fresh {
        padding: 32px 96px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .fresh-title {
        display: flex;
        justify-content: space-between;
        font-family: 'Tarnac';
        font-weight: 700;
    }

    .fresh-title>span {
        text-transform: uppercase;
        margin-left: 16px;
    }

    .container.banners {
        display: flex;
        padding: 32px 112px;
        gap: 24px;
    }

    .container.banners>img {
        cursor: pointer;
    }

    .container.brands {
        display: flex;
        flex-direction: column;
        padding: 32px 96px;
        gap: 24px;
    }

    .brands-title {
        display: flex;
        justify-content: space-between;
    }

    .brands-title>span {
        text-transform: uppercase;
        margin-left: 16px;
    }

    .container.promotion {
        padding: 64px 112px;
    }

    .promotion-wrapper {
        background: #F7F7F7;
        border-radius: 32px;
        padding: 44px 48px 48px 48px;
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    .promotion-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .subtitle {
        font-size: 14px;
        font-family: 'Tarnac';
    }

    .promotion-title>.title {
        font-size: 44px;
        max-width: 626px;
        text-align: left;
    }

    .title>font {
        font-style: italic;
        color: #F64;
    }

    .promotion-blocks {
        display: flex;
        gap: 32px;
    }

    .promotion-block {
        padding: 20px;
        background: #FFFFFF;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        cursor: pointer;
        justify-content: space-between;
        height: 188px;
    }

    .promotion-block-title {
        font-size: 28px;
        max-width: 206px;
        text-align: left;
    }

    .promotion-block-link {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #F64;
        font-family: 'Tarnac';
        font-weight: 400;
    }

    .container.popular-products {
        padding: 32px 96px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .container.subscription {
        margin: 32px 96px;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .container.subscription>img {
        margin: 0 16px 0 0;
    }

    .subscription-btns {
        position: absolute;
        display: flex;
        gap: 16px;
        align-items: center;
        right: 109px;
        bottom: 48px;
    }

    .subscription-btn.subscribe {
        padding: 10px 20px;
        background: #000;
        color: #fff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 20px;
    }

    .subscription-btn.learn-more {
        padding: 10px 20px;
        border: 1px solid #000;
        color: #000;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 20px;
    }

    .container.feedback {
        padding: 32px 96px;
        display: flex;
        flex-direction: column;
        gap: 48px;
    }

    .feedback-title {
        font-size: 44px;
        max-width: 570px;
    }

    .feedback-title>font {
        font-family: Roobert Italic;
        color: #f64;
    }

    
    </style>
