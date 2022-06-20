<template>
    <div id="app">
      <link rel="stylesheet" href="/assets/css/main.css">
      <LayoutHeader @pageHint="(value) => topPageHint = value" :topPageHint="topPageHint"></LayoutHeader>
      <main :style="topPageHint ? {'margin-top': '168px'} : {'margin-top': '112px'}">
        <LeftListings></LeftListings>
        <ListingsContent></ListingsContent>
      </main>
      <MainFooter></MainFooter>
    </div>
  </template>
  
    <script>
  import LayoutHeader from '/src/components/layout/LayoutHeader.vue'
  import LeftListings from '/src/components/layout/LeftListings.vue'
  import ListingsContent from '/src/components/layout/ListingsContent.vue'
  import MainFooter from '/src/components/layout/MainFooter.vue'
  
  export default {
    name: 'App',
    components: {
      LayoutHeader,
      LeftListings,
      ListingsContent,
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