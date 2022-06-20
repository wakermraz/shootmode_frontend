<template>
    <div :style="footerVisible ? {'margin-top': '-'+menuHeight+'px'} : ''" class="left-main-menu">
        <router-link class="button-back" to="/">BACK TO HOME</router-link>
        <div class="active-category">
            <img src="/assets/img/audio-icon.svg">
            <span>Audio</span>
        </div>
        <div class="subcategories-container">
            <span>Audio Packages</span>
            <span>Boom/Shotgun</span>
            <span>Microphones</span>
            <span>Mixers</span>
            <span>Mixer Accessories</span>
            <span>Portable Recorders</span>
            <span>Receivers</span>
            <span>Wireless Systems</span>
            <span>Transmitters</span>
            <span>Communications</span>
            <span>Audio Cables</span>
            <span>Audio Accessories</span>
            <span>Audio Batteries/Power</span>
            <span>Speakers</span>
            <span>Mic Preamps</span>
            <span>Interfaces</span>
            <span>Compressors</span>
            <span>Signal Processing</span>
            <span>Equalizers</span>
            <span>Other</span>
        </div>
    </div>
</template>

    <script>
export default {
    name: 'LeftCategoryMenu',
    data() {
        return {
            footerVisible: null,
            menuHeight: 0,
        }
    },
    mounted() {
        this.menuHeight = document.querySelector('.left-main-menu').scrollHeight + 200
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            let el = document.querySelector('footer');
            let rect = el.getBoundingClientRect();
            let elemTop = rect.top;
            let elemBottom = rect.bottom;

            // Partially visible elements return true:
            let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
            if(isVisible) this.footerVisible = true;
            else this.footerVisible = false;
        }
    }
}
</script>


<style scoped>
.left-main-menu {
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 24px 0 0 48px;
    position: fixed;
    background: #fff;
    height: 100%;
    transition: .2s;
}

.button-back {
    padding: 8px 63px 8px 52px;
    font-family: Tarnac;
    color: rgba(0, 0, 0, 0.48);
}

.active-category {
    padding: 6px 16px 6px 13px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 24px;
    font-family: Tarnac;
    background: #F7F7F7;
    border-radius: 8px;
}

.subcategories-container {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    gap: 4px;
    color: rgba(0, 0, 0, 0.64);
    font-size: 20px;
    font-family: Tarnac;
}

.subcategories-container>span {
    padding: 6px 16px 6px 76px;
    cursor: pointer;
}
</style>
