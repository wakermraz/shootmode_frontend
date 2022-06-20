<template>
    <div :style="footerVisible ? {'margin-top': '-'+menuHeight+'px'} : ''" class="left-main-menu">
        <div class="left-main-menu__nav">
            <router-link class="nav-item is-active" to="/">
                <img class="nav-item-img" src="/assets/img/home-icon.svg">
                <span class="nav-item-title">Home</span>
            </router-link>
            <router-link class="nav-item" to="/catalog">
                <img class="nav-item-img" src="/assets/img/catalog-icon.svg">
                <span class="nav-item-title">Catalog</span>
            </router-link>
            <router-link class="nav-item" to="/catalog">
                <img class="nav-item-img" src="/assets/img/listings-icon.svg">
                <span class="nav-item-title">Listings</span>
            </router-link>
            <router-link class="nav-item" to="/catalog">
                <img class="nav-item-img" src="/assets/img/bookings-icon.svg">
                <span class="nav-item-title">Bookings</span>
            </router-link>
            <router-link class="nav-item" to="/catalog">
                <img class="nav-item-img" src="/assets/img/message-icon.svg">
                <span class="nav-item-title">Messages</span>
            </router-link>
        </div>
        <div class="left-main-menu__catalog">
            <span class="catalog-title">CATALOG</span>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/cameras-icon.svg">
                <span>Cameras</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/lenses-icon.svg">
                <span>Lenses</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/lightning-icon.svg">
                <span>Lightning / Electric</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/audio-icon.svg">
                <span>Audio</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/cameras-icon.svg">
                <span>Camera Accessor...</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/audio-icon.svg">
                <span>Cameras support</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/lightning-icon.svg">
                <span>Monitors / EVFs</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/lenses-icon.svg">
                <span>DIT / Media Mana...</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/cameras-icon.svg">
                <span>Grip</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/lenses-icon.svg">
                <span>Drones</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/lightning-icon.svg">
                <span>Locations / Spaces</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/audio-icon.svg">
                <span>Media</span>
            </router-link>
            <router-link class="catalog-item" to="/category/audio">
                <img src="/assets/img/cameras-icon.svg">
                <span>Art & Props</span>
            </router-link>
        </div>
    </div>
</template>

    <script>
export default {
    name: 'LeftMainMenu',
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
    width: 288px;
    gap: 40px;
    padding: 24px 0 0 48px;
    position: fixed;
    background: #fff;
    height: 100%;
    transition: .2s;
}

.is-active>img {
    filter: invert(49%) sepia(45%) saturate(1390%) hue-rotate(330deg) brightness(99%) contrast(104%);
}

.is-active>span {
    color: #FF6644;
}

.left-main-menu__nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    cursor: pointer;
    transition: .2s;
}

.nav-item:not(.is-active):hover .nav-item-img {
    filter: invert(49%) sepia(45%) saturate(1390%) hue-rotate(330deg) brightness(99%) contrast(104%);
    transition: .2s
}

.nav-item:not(.is-active):hover .nav-item-title {
    color: #FF6644;
    transition: .2s
}

.nav-item-img,
.nav-item-title {
    transition: .2s;
}

.nav-item>img {
    width: 24px;
    height: 24px;
}

.nav-item>span {
    font-size: 24px;
}

.left-main-menu__catalog {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Tarnac';
}

.catalog-title {
    font-size: 16px;
    color: #0000007A;
    padding: 8px 115px 8px 52px;
}

.catalog-item {
    padding: 6px 16px 6px 12px;
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
}

.catalog-item>img {
    background: #F7F7F7;
    border-radius: 6px;
}

.catalog-item>span {
    font-size: 20px;
    white-space: nowrap;
    max-width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
