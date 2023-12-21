<template>
  <div class="form-header">
    <h1 class="form-header__title">Опросы</h1>
    <div class="form-header__surveys">
      <img
        class="form-header__surveys-image"
        src="@/assets/icons/arrow-right.svg"
        alt="arrow"
      />
      <div class="form-header__surveys-text">ВСЕ ОПРОСЫ</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-header {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 27px;

  &__title {
    font-weight: 700;
    font-size: 16px;

    @media screen and (min-width: 520px) {
      font-size: 20px;
    }

    @media screen and (min-width: 768px) {
      font-size: 23px;
    }

    @media screen and (min-width: 1260px) {
      font-size: 28px;
    }
  }

  &__surveys {
    display: flex;
    align-items: center;
    gap: 10px;

    &-text {
      font-weight: 700;
      font-size: 13px;
    }
  }
}
</style>
