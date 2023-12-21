<template>
  <label class="form-answer">
    <input
      class="form-answer__input"
      type="checkbox"
      :id="props.answer.id"
      name="answers[]"
      v-model="props.answer.checked"
    />
    <span class="form-answer__checkbox"></span>
    <span class="form-answer__text">{{ props.answer.text }}</span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  answer: {
    type: Object,
    default: () => {},
    required: true,
  },
});
</script>

<style scoped lang="scss">
.form-answer {
  display: flex;
  align-items: center;
  gap: 6px;

  &__text {
    cursor: pointer;
  }

  &__input {
    display: none;
  }

  &__checkbox {
    width: 24px;
    height: 24px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4px;
    position: relative;
    cursor: pointer;

    &:before {
      content: "\2713";
      font-size: 16px;
      color: transparent;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      visibility: hidden;
    }
  }

  &__input:checked + &__checkbox {
    background-color: rgba(0, 40, 85, 1);
    border-color: rgba(0, 40, 85, 1);
    &:before {
      color: #fff;
      visibility: visible;
    }
  }
}
</style>
