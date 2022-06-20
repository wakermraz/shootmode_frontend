<template>
    <div id="app">
      <link rel="stylesheet" href="/assets/css/main.css">
      <LayoutHeader @pageHint="(value) => topPageHint = value" :topPageHint="topPageHint"></LayoutHeader>
      <main :style="topPageHint ? {'margin-top': '168px'} : {'margin-top': '112px'}">
        <LeftMainMenu></LeftMainMenu>
        <MainContent></MainContent>
      </main>
      <MainFooter></MainFooter>
      <AuthModal></AuthModal>
    </div>
  </template>
  
    <script>
  import AuthModal from '/src/components/modals/AuthModal.vue'
  import LayoutHeader from '/src/components/layout/LayoutHeader.vue'
  import LeftMainMenu from '/src/components/layout/LeftMainMenu.vue'
  import MainContent from '/src/components/layout/MainContent.vue'
  import MainFooter from '/src/components/layout/MainFooter.vue'
  
  export default {
    name: 'App',
    components: {
      AuthModal,
      LayoutHeader,
      LeftMainMenu,
      MainContent,
      MainFooter
    },
    data() {
      return {
        topPageHint: false
      }
    },
    mounted() {
      this.initCookies()
    },
    methods: {
      initCookies() {
        if (this.$cookie.get('topPageHint')) this.topPageHint = false
        else this.topPageHint = true
      },
      pageHint(value) {
        this.topPageHint = value
      }
    },
  }
  </script>
  
  <style>
  </style>