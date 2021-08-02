<template lang="pug">
.container-fluid.g-0 
  .content.vh-100 
    .content__svg 
    .content__svg-1 
    .content__svg-2 
    .content__svg-3 
    v-btnclose 
    section.container.rise 
      h3.rise__title Join Our Priority List 
      .form-wrap.mt-5 
        v-form 
    .footer-wrap.w-100.mb-5 
      v-footer 
</template>

<script>
import BtnClose from "../components/BtnClose";

export default {
  name: "Rise",
  components: {
    "v-btnclose": BtnClose,
  },

  created() {},

  data() {
    return {};
  },

  props: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_rise.scss";
</style>
