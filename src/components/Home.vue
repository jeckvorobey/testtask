<template lang="pug">
    .content.vh-100
      section.container.home
        .row.clearfix.w-100.g-0
          .col-12.col-xl-5
            v-leftinfo
          .col-12.col-xl-7
            v-blockimg
        .row
          v-footer 
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
@import "../assets/style/_home.scss";
</style>
