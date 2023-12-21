<template>
  <div class="form-question">
    <h2 class="form-question__text">
      {{ currentQuestion }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFormStore } from "../../store/form";
const store = useFormStore();

const currentQuestion = computed<string>(
  () => store.forms[store.GET_NUMBER_QUESTION].question
);
</script>

<style scoped lang="scss">
.form-question {
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-left: 4px solid rgba(249, 66, 58, 1);
  &__text {
    font-size: 16px;
    font-weight: 600;

    @media screen and (min-width: 520px) {
      font-size: 20px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 25px;
    }
  }
}
</style>
