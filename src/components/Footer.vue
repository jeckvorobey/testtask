<template lang="pug">
  footer.footer.d-flex.justify-content-between.align-items-end 
    .footer__icons 
      .footer__icons.item 
        img(src="../assets/images/footer/Vector_Smart_Object.png" alt="icon-modern").item__modern
        img(src="../assets/images/footer/Vector_Smart_Objecta.png" alt="icon-home")     
    p.footer__copy.m-0 Copyrights 2021 &copy; Rise LIC 
    p.footer__privacy.m-0 Privacy Policy 
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
$fc-main: #222222;
$fc-second: #191919;
$fc-third: #666666;

$bg-color: #f6f0e8;

$ff-second: Manrope;
$ff-semibold: Manrope-SB;

.footer {
  color: $fc-main;
  font-family: $ff-second;

  &__copy {
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    // line-height: 120px;
    text-align: center;
    font-style: normal;
    letter-spacing: 0.33px;
    line-height: normal;
  }

  &__privacy {
    font-family: $ff-semibold;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: 30px;
    text-align: right;
    font-style: normal;
    letter-spacing: 0.35px;
    line-height: normal;
  }
}

.item__modern {
  margin-right: 40px;
}
</style>
