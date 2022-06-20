<template>
  <header>
    <div v-show="topPageHint" class="top-page-hint">
      <span>The Launch of</span>
      <span>shootmode</span>
      <img src="/assets/img/top-page-logo.svg">
      <span class="founders-story">A Founder’s Story</span>
      <img src="/assets/img/chevron-right-white-icon.svg">
      <div @click="closeTopPageHint()" class="close-top-page-hint">
        <img src="/assets/img/cross-icon.svg">
      </div>
    </div>
    <div class="header">
      <div class="header-left">
        <img src="/assets/img/logo.svg" alt="ShootMode">
      </div>
      <div class="header-middle">
        <CatalogBtn></CatalogBtn>
        <SearchInput></SearchInput>
        <LocationBtn></LocationBtn>
      </div>
      <div class="header-right">
        <CartBtn></CartBtn>
        <MessagesBtn></MessagesBtn>
        <div class="user-wrapper">
          <img src="/assets/img/user-avatar.png">
          <img src="/assets/img/chevron-down-gray.svg">
          <span class="notifications">3</span>
        </div>
      </div>
    </div>
  </header>
</template>

  <script>
import CatalogBtn from './btns/CatalogBtn.vue'
import SearchInput from './SearchInput.vue'
import LocationBtn from './btns/LocationBtn.vue'
import CartBtn from './btns/CartBtn.vue'
import MessagesBtn from './btns/MessagesBtn.vue'

export default {
  name: 'LayoutHeader',
  components: {
    CatalogBtn,
    LocationBtn,
    SearchInput,
    CartBtn,
    MessagesBtn
  },
  props: {
    topPageHint: Boolean
  },
  data() {
    return {
    }
  },
  methods: {
    closeTopPageHint() {
      this.$cookie.set('topPageHint', 'false', 15)
      this.$emit('pageHint', false)
    }
  }
}
</script>


  <style scoped>
  .top-page-hint {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: #FF6644;
    height: 56px;
    color: #fff;
  }
  
  .close-top-page-hint {
    display: flex;
    cursor: pointer;
    position: absolute;
    background: rgba(255, 255, 255, 0.24);
    border-radius: 32px;
    padding: 8px;
    top: 12px;
    right: 16px;
  }
  
  header {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 999;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    height: 112px;
  }
  
  .header-middle {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .header-search-wrapper {
    display: flex;
    flex-direction: column;
    height: 48px;
    justify-content: flex-start;
    gap: 8px;
  }
  
  .header-right {
    display: flex;
    gap: 8px;
  }
  
  .user-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    position: relative;
  }
  
  .notifications {
    position: absolute;
    padding: 0 8px;
    background: #FF6644;
    border-radius: 40px;
    color: #fff;
    right: 17px;
    top: -6px;
    font-family: 'Tarnac';
  }

  .founders-story {
    font-family: 'Roobert Italic';
  }
  </style>
