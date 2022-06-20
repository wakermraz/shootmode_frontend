<template>
    <div :style="footerVisible ? {'margin-top': '-'+menuHeight+'px'} : ''" class="left-main-menu">
        <div class="user-top">
            <div class="avatar">
                <img src="/assets/img/feedback-user.svg">
                <span>George Gao</span>
            </div>
            <div class="rating">
                <div class="rating-top">
                    <img src="/assets/img/star-black-icon.svg">
                    <span>4.94</span>
                    <img src="/assets/img/dot-black-icon.svg">
                    <span>16 reviews</span>
                </div>
                <div class="rating-bottom">
                    <img src="/assets/img/verified-black-icon.svg">
                    <span>Indentity verified</span>
                </div>
            </div>
        </div>
        <div class="profile-nav">
            <div class="nav-item">
                <img src="/assets/img/messages-black-icon.svg">
                <span>Messages</span>
                <span class="notification">3</span>
            </div>
            <div class="nav-item">
                <img src="/assets/img/profile-black-icon.svg">
                <span>Profile</span>
            </div>
            <div class="nav-item">
                <img src="/assets/img/bookings-black-icon.svg">
                <span>Bookings</span>
                <span class="notification">3</span>
            </div>
            <div class="nav-item">
                <img src="/assets/img/settings-black-icon.svg">
                <span>Settings</span>
            </div>
            <div class="nav-item">
                <img src="/assets/img/help-black-icon.svg">
                <span>Help & Support</span>
            </div>
        </div>
        <div class="profile-footer">
            <span>Community Rules</span>
            <span>Terms & Conditions of Service</span>
            <span>Sign Out</span>
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
    width: 340px;
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

.avatar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
}

.avatar>img {
    width: 96px;
    height: 96px;
}

.notification {
    font-size: 16px;
    font-family: Tarnac;
    background: #FF6644;
    border-radius: 40px;
    color: #fff;
    padding: 0 8px;
}

.avatar>span {
    font-size: 32px;
    font-family: Tarnac;
}

.rating {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: Tarnac;
}

.rating-top {
    display: flex;
    align-items: center;
    gap: 4px;
}

.rating-bottom {
    display: flex;
    align-items: center;
    gap: 4px;
}

.profile-nav {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.nav-item {
    display: flex;
    padding: 8px 0 8px 16px;
    gap: 12px;
    font-size: 24px;
    cursor: pointer;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
}

.profile-footer {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 52px;
    font-family: Tarnac;
    color: rgba(0, 0, 0, 0.8);
}
</style>
