<template>

  <header>
    <div class="container">
        <a v-link="{ path: '/' }" class="display-3 heading">Vue Starter Pack</a>
    </div>
  </header>

</template>

<style lang="sass">
  @import "../../assets/scss/colors"

  header
    padding: 5% 0
    margin-bottom: 5%
    background: $vue-green

    .display-3
      color: $vue-gray
      text-decoration: none
      transition: color ease 200ms
      &:hover
        color: $vue-light-gray
</style>

<script>
</script>
