<template>
    <footer>
        <div class="footer-top">
            <div class="footer-top__left">
                <span @click="activeTab = 'topCategories'" :class="activeTab == 'topCategories' ? 'left-nav is-active' : 'left-nav'">Top categories</span>
                <span @click="activeTab = 'topProducts'" :class="activeTab == 'topProducts' ? 'left-nav is-active' : 'left-nav'">Top products</span>
                <span @click="activeTab = 'topLocations'" :class="activeTab == 'topLocations' ? 'left-nav is-active' : 'left-nav'">Top locations / spaces</span>
            </div>
            <div class="footer-top__right">
                <div v-show="activeTab == 'topCategories'" class="list">
                    <span class="list-item">Audio Packages </span>
                    <span class="list-item">Boom/Shotgun  </span>
                    <span class="list-item">Microphones </span>
                    <span class="list-item">Mixers </span>
                    <span class="list-item">Mixer Accessories </span>
                    <span class="list-item">Portable Recorders </span>
                    <span class="list-item">Receivers </span>
                    <span class="list-item">Wireless Systems </span>
                    <span class="list-item">Audio Accessories </span>
                    <span class="list-item">Audio Batteries/Power  </span>
                    <span class="list-item">Speakers </span>
                    <span class="list-item">Mic Preamps </span>
                    <span class="list-item">Compressors </span>
                    <span class="list-item">Signal Processing </span>
                    <span class="list-item">Equalizers </span>
                </div>
                <div v-show="activeTab == 'topProducts'" class="list">
                    <span class="list-item">Audio Packages </span>
                    <span class="list-item">Audio Accessories </span>
                    <span class="list-item">Audio Batteries/Power  </span>
                    <span class="list-item">Speakers </span>
                    <span class="list-item">Mic Preamps </span>
                    <span class="list-item">Interfaces </span>
                    <span class="list-item">Compressors </span>
                    <span class="list-item">Signal Processing </span>
                    <span class="list-item">Equalizers </span>
                </div>
                <div v-show="activeTab == 'topLocations'" class="list">
                    <span class="list-item">Audio Packages </span>
                    <span class="list-item">Boom/Shotgun  </span>
                    <span class="list-item">Signal Processing </span>
                    <span class="list-item">Equalizers </span>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom__left">
                <div class="bottom__left-top">
                    <img src="/assets/img/logo-footer.svg" class="footer-logo">
                    <div class="bottom__left-top__text">
                        <span>Find a right gear for your next project on shootmode community. And rent it smoothly as you bought it.</span>
                        <span>We acknowledges the Australian Aboriginal and Torres Strait Islander peoples as the Traditional owners of the land on which we live, learn and work.</span>
                    </div>
                </div>
                <div class="bottom__left-bottom">
                    <div class="socials-links">
                        <span class="link">Blog</span>
                        <span class="link">About us</span>
                        <span class="link">Contact us</span>
                    </div>
                    <div class="social-icons">
                        <div class="icon">
                            <img src="/assets/img/instagram.svg">
                        </div>
                        <div class="icon">
                            <img src="/assets/img/facebook.svg">
                        </div>
                        <div class="icon">
                            <img src="/assets/img/youtube.svg">
                        </div>
                        <div class="icon">
                            <img src="/assets/img/vimeo.svg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom__right">
                <div class="bottom__footer-list">
                    <span class="bottom__footer-list-title">How it works</span>
                    <span class="footer-list-item">How it works</span>
                    <span class="footer-list-item">Listing For Rent</span>
                    <span class="footer-list-item">Renting Gear</span>
                    <span class="footer-list-item">Insurance</span>
                    <span class="footer-list-item">Support Center</span>
                </div>
                <div class="bottom__footer-list">
                    <span class="bottom__footer-list-title">Top Cities</span>
                    <span class="footer-list-item">Melbourne Rentals</span>
                    <span class="footer-list-item">Sydney Rentals</span>
                    <span class="footer-list-item">Brisban Rentals</span>
                    <span class="footer-list-item">Perth Rentals</span>
                    <span class="footer-list-item">Adelaide Rentals</span>
                    <span class="footer-list-item">Gold Coast Rentals</span>
                    <span class="footer-list-item">Canberra Rentals</span>
                </div>
                <div class="bottom__footer-list">
                    <span class="bottom__footer-list-title">Terms</span>
                    <span class="footer-list-item">Terms of Service</span>
                    <span class="footer-list-item">Privacy Policy</span>
                    <span class="footer-list-item">Community Rules</span>
                    <span class="footer-list-item">Trust and Safety</span>
                </div>
            </div>
        </div>
        <div class="copyright">
            <span>©2022 – shootmode.  All rights reserved. Made with ❤️ in Melbourne</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'MainFooter',
    data() {
        return {
            activeTab: 'topCategories'
        }
    }
}
</script>


<style scoped>
footer {
    background: #000;
    padding: 96px 64px 64px 64px;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
}

.footer-top {
    display: flex;
}

.footer-top__left {
    min-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 40px;
    color: rgb(255, 102, 68);
}

.left-nav {
    opacity: .4;
    cursor: pointer;
}

.left-nav:hover {
    opacity: 1;
}

.is-active {
    opacity: 1;
}

.footer-top__right {
    display: flex;
    justify-content: flex-start;
}

.list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 28px;
    max-height: 512px;
    column-gap: 32px;
    min-height: 484px;
}

.list-item {
    cursor: pointer;
}

.footer-bottom {
    margin-top: 94px;
    padding-top: 64px;
    border-top: 2px solid rgba(255, 255, 255, 0.16);
    display: flex;
    justify-content: space-between;
}

.footer-bottom__left {
    display: flex;
    flex-direction: column;
    gap: 48px;
}

.bottom__left-top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
}

.bottom__left-top__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 264px;
}

.bottom__left-bottom {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.socials-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 20px;
}

.link,
.icon {
    cursor: pointer;
}

.social-icons {
    display: flex;
    gap: 8px;
}

.footer-bottom__right {
    display: flex;
    max-width: 717px;
    justify-content: space-between;
    gap: 16px;
}

.bottom__footer-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-right: 40px;
    cursor: pointer;
}

.bottom__footer-list-title {
    font-family: Tarnac;
    font-size: 14px;
}

.footer-list-item {
    font-size: 24px;
}

.copyright {
    position: absolute;
    right: 64px;
    bottom: 34px;
    opacity: .8;
    font-size: 12px;
    font-family: Tarnac;
}
</style>
