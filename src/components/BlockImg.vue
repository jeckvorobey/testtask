<template lang="pug">
  .elements 
    .elements__1 
    figure.elements__figure 
      img(src="../assets/images/home/img.png" alt="img" v-on:click="showImg").elements__img 
    .elements__2 
    .elements__3 
    popup(v-if="popupShow" v-on:popapClose="popapClose")
      img(src="../assets/images/home/img.png" alt="img").img-fluid
</template>
<script>
import popup from "../components/Popup";

export default {
  name: "BlockImg",
  components: {
    popup,
  },

  data() {
    return {
      popupShow: false,
    };
  },

  methods: {
    showImg() {
      this.popupShow = true;
    },
    popapClose() {
      this.popupShow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/style/_blockimg.scss";
</style>
