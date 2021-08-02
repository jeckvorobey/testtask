<template lang="pug">
  .container-fluid.g-0
    .content.vh-100.mb-5
      section.container.home
        .row.clearfix.w-100.g-0
          .col-12.col-xl-5
            v-leftinfo
          .col-12.col-xl-7
            v-blockimg
        .row
          v-footer 
    .content.vh-100.mb-5      
      section.container.home
        .row.clearfix.w-100.g-0
          .col-12.col-xl-5
            v-leftinfo
          .col-12.col-xl-7 
            figure.figure
              img(src="../assets/images/img-section-2.png" alt="img-section").figure-img.img-fluid.rounded
        .row
          v-footer
    .content.vh-100.mb-5
      section.container.home
        .row.clearfix.w-100.g-0
          .col-12.col-xl-5
            v-leftinfo
          .col-12.col-xl-7
            figure.figure
              img(src="../assets/images/img-section-3.png" alt="img-section").figure-img.img-fluid.rounded
        .row
          v-footer 
    .content.vh-100
      section.container.home
        .row.clearfix.w-100.g-0
          .col-12.col-xl-5
            v-leftinfo
          .col-12.col-xl-7
            figure.figure
              img(src="../assets/images/img-section-4.png" alt="img-section").figure-img.img-fluid.rounded
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
