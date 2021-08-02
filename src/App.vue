<template lang="pug">
#app
  main.main 
    router-view 
    b-modal(
      hide-header
      hide-footer 
      centered 
      visible
      )#modal-form.d-block.text-center
      b-container(fluid)
        h3.title Join Our Priority List
        b-form
          b-form-input(
          v-model="text" placeholder="First & Last Name"
          )
          b-form-input(
          v-model="text" placeholder="Email Address"
          )
          b-form-select(
          v-model="selected" 
          :options="options"
          placeholder="Email Address"
          )
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
@import "/src/assets/style/_modalform.scss";
</style>
