<template lang="pug">
    .content
      section.container.home
        .row 
          .col-5
            v-leftinfo
          .col-xl 
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
