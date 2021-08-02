<template lang="pug">
  .elements 
    .elements__1 
    figure().elements__figure 
      img(src="../assets/images/home/img.png"  alt="img" v-on:click="$bvModal.show('modal-img')").elements__img 
    .elements__2 
    .elements__3 
    b-modal(
      hide-footer
      hide-header
      content-class="content-img"
      dialog-class="dialog-img"
      centered
      static
    )#modal-img
      template
        b-container(fluid)
          figure
            img(src="../assets/images/home/img.png" alt="img")
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/style/_blockimg.scss";
</style>
