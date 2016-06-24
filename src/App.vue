<style lang="sass" src="./assets/scss/main.sass"></style>

<template>
  <div class="app">

    <page-header></page-header>

    <div class="application main container">
      <router-view class="view"></router-view>
    </div>

    <page-footer></page-footer>

  </div>
</template>

<script>
  import PageHeader from './components/layout/header.vue'
  import PageFooter from './components/layout/footer.vue'

  export default {
    name: 'app',
    components: {
      PageHeader, PageFooter
    }
  }
</script>
