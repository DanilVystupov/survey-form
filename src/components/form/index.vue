<template>
  <div>
    <div v-if="!store.forms.length"><Loader /></div>
    <div v-else class="form-wrap">
      <FormHeader />

      <form class="form">
        <FormQuestion />

        <div class="form-answers">
          <VInput v-for="answer in answers" :key="answer.id" :answer="answer" />

          <div class="form-buttom">
            <VButton
              v-if="numberQuestion !== store.forms.length - 1"
              :text="currentText"
              :onClick="store.nextQuestion"
              :disabled="!isChecked"
            />

            <div class="form-buttom__content" v-else>
              <VButton
                :text="'Отправить'"
                @click.once="submitForm"
                :disabled="!isChecked"
              />

              <router-link
                to="/answers"
                :class="[isChecked ? 'v-button' : 'v-button disabled']"
              >
                Показать ответы
              </router-link>

              <VButton
                :text="'Очистить форму'"
                :disabled="!selectedAnswers.length"
                :onClick="resetForm"
              />
            </div>

            <div class="form-buttom__content-text">
              Проголосовало:
              <span>{{ voteCount }}</span>
            </div>
          </div>

          <FormImages />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useFormStore } from "@/store/form";

import FormHeader from "./FormHeader.vue";
import FormQuestion from "./FormQuestion.vue";
import FormImages from "./FormImages.vue";

import Loader from "../UI/Loader.vue";
import VInput from "../UI/VInput.vue";
import VButton from "../UI/VButton.vue";

import type { Answer } from "@/types/index";

const store = useFormStore();

const numberQuestion = computed(() => store.GET_NUMBER_QUESTION);
const answers = computed<Answer[]>(
  () => store.forms[store.GET_NUMBER_QUESTION].answers
);
const isChecked = computed(() => store.isChecked);
const voteCount = computed(() => store.GET_VOTE_COUNT);
const currentText = computed(() => store.GET_VOTE_TEXT);

const selectedAnswers = computed(() => store.GET_SELECTED_ANSWERS);

const resetForm = () => {
  if (selectedAnswers.value.length > 0) {
    store.resetForm();
  }
};

const submitForm = () => {
  store.submitForm();
};

watch(
  [() => store.atLeastOneChecked(), () => store.updateSelectedAnswers()],
  () => {}
);
</script>

<style scoped lang="scss">
.form-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(245, 247, 249);
  padding: 35px 30px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-question {
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-left: 4px solid rgba(249, 66, 58, 1);
  &__text {
    font-weight: 600;
    font-size: 26px;
  }
}

.form-answers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.form-buttom {
  display: flex;
  flex-direction: column;

  gap: 10px;

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    &-text {
      text-align: center;
      @media screen and (min-width: 768px) {
        text-align: start;
      }
      & span {
        font-weight: 700;
      }
    }
  }
}
</style>
