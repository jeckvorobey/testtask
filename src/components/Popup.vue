<template lang="pug">
.wrap
  .popup__area(v-on:click="popapClose")
  .popup 
    .popup__header
      button(v-on:click="popapClose").popup__close.mb-4 X
    .popup__content 
      slot 
</template>

<script>
export default {
  name: "popup",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    popapClose() {
      this.$emit("popapClose");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_popup.scss";
</style>
