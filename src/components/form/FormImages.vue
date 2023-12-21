<template>
  <div class="form-images">
    <img
      class="form-images__item"
      src="@/assets/images/red-triangle.png"
      alt="red-triangle"
    />
    <img
      class="form-images__item"
      src="@/assets/images/paper-document.png"
      alt="paper-document"
    />
  </div>
</template>

<style scoped lang="scss">
.form-images {
  display: none;
  position: absolute;
  right: 0px;
  bottom: 0px;

  @media screen and (min-width: 768px) {
    display: block;
  }
  &__item {
    &:nth-child(1) {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 0;
    }

    &:nth-child(2) {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
  }
}
</style>
