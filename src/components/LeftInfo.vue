<template lang="pug">
  .info.text-start
    img(src="../assets/images/logo.svg" alt="logo").info__logo
    .info__text
      h1.info__title 
        | Welcome to the heightened life.
      span.info__subtitle.d-block
        | Studio to 3 BR Luxury Rentals
      span.info__desc.d-block.mt-1.mt-lg-3
        | comming summer 2021 
    .info__btn.mt-5
      v-btn
</template>

<script>
export default {
  name: "LeftInfo",
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_leftinfo.scss";
</style>
