<template>
  <article >
    <div class="container-fluid error row">
      <p class="display-4"><span class="display-3">404</span> You took a wrong turn :(</p>
    </div>
    <a class="btn btn-vue" v-link="{ path: '/' }"> Go Home</a>
  </article>
</template>

<style lang="sass">
  @import "../../assets/scss/colors"

  article
    align-content: center
  .error
    span
      color: $vue-green
  .btn-vue
    background: $vue-green
    color: $text-light-primary
    transition: color ease 150ms
    &:hover
      color: $text-light-primary
      background: darken($vue-green, 5%)
    &:active
      color: $text-light-primary

</style>

<script>
</script>
