<template lang="pug">
  b-form.form
    b-form-input(v-model="text" placeholder="First & Last Name").form__input 
    b-form-input(v-model="email" placeholder="Email Address").form__input.mt-3 
    b-form-select(v-model="selected1" v-bind:options="options1").form__select.mt-3
    b-form-select(v-model="selected2" v-bind:options="options2").form__select.mt-3
    b-button(type="submit").form__btn.mt-5 Submit
</template>
<script>
export default {
  name: "Form",
  created() {},

  data() {
    return {
      text: "",
      email: "",
      selected1: null,
      options1: [
        {
          value: null,
          text: "Preferred Unit Type",
        },
      ],
      selected2: null,
      options2: [
        {
          value: null,
          text: "How Did You Hear About Us?",
        },
      ],
    };
  },

  props: {},

  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/style/_form.scss";
</style>
