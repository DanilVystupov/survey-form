<template>
  <div class="user-answers">
    <h2 class="user-answers__title">Ваши выбранные ответы:</h2>
    <ul v-if="selectedAnswers.length > 0" class="user-answers__list">
      <li
        v-for="answerGroup in selectedAnswers"
        :key="answerGroup.question"
        class="user-answers__list-item"
      >
        <div class="user-answers__list-item__text">
          Вопрос: {{ answerGroup.question }}
        </div>
        <ul class="user-answers__sublist">
          <div class="user-answers__sublist__title">Ответ:</div>
          <li
            v-for="answer in answerGroup.answers"
            :key="answer.id"
            class="user-answers__sublist-item"
          >
            {{ answer.text }}
          </li>
        </ul>
      </li>
    </ul>
    <div v-else>Ничего не выбрано</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFormStore } from "@/store/form";

const store = useFormStore();

const selectedAnswers = computed(() => store.GET_SELECTED_ANSWERS);
</script>

<style scoped lang="scss">
.user-answers {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 2px solid rgb(88, 88, 205);
      border-radius: 10px;
      padding: 10px;

      @media screen and (min-width: 768px) {
        width: 30%;
      }

      @media screen and (min-width: 1200px) {
        width: 23%;
      }

      @media screen and (min-width: 1560px) {
        width: 18%;
      }
    }
  }

  &__sublist {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
