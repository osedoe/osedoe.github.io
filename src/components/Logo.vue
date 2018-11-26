<template>
  <div class="logo-wrapper">
    <img class="logo logo-mobile" src="/assets/Logo-mobile.svg" alt="Logo Mobile">
    <img class="logo logo-desktop" src="/assets/Logo-desktop.svg" alt="Logo Desktop">
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.logo-wrapper {
  /* TODO: Change positioning with grid layout */
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 160px;
  z-index: 20;

  & .logo-mobile {
    display: block;
    max-width: 80px;
  }

  & .logo-desktop {
    display: none;
  }
}

@media (min-width: 768px) {
  .logo-wrapper {
    top: 20px;
    left: 40px;

    & .logo-mobile {
      display: none;
    }

    & .logo-desktop {
      display: block;
      max-width: 160px;
    }
  }
}
</style>
