<template lang="pug">
  a(href="#" v-on:click.prevent="onClick").button.d-inline-flex.justify-content-center.align-items-center
    |Join Our Priority List 
</template>

<script>
export default {
  name: "Btn",
  methods: {
    onClick() {
      this.$emit("showModalForm");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_btn.scss";
</style>
