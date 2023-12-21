import { defineStore } from 'pinia';
import formsData from '@/data/formsData';
import { FormData, Answer } from '@/types/index'
import axios from 'axios';

interface FormState {
  forms: FormData[];
  numberQuestion: number;
  voteCount: number;
  isChecked: boolean;
  selectedAnswers: Array<{ question: string; answers: Answer[] }>;
}

export const useFormStore = defineStore({
  id: 'form',
  state: (): FormState => {
    const savedData = localStorage.getItem('formStoreData');
    const initialState = savedData
      ? JSON.parse(savedData)
      : {
          forms: formsData,
          numberQuestion: 0,
          voteCount: 16,
          isChecked: false,
          selectedAnswers: [],
          resetFormState: () => {},
        };

    return initialState;
  },

  getters: {
    GET_NUMBER_QUESTION: (state): number => state.numberQuestion,

    GET_VOTE_TEXT: (state): string => state.forms[state.numberQuestion]?.vote.text,

    GET_VOTE_COUNT:(state): number => state.voteCount,

    GET_SELECTED_ANSWERS: (state): Array<{ question: string; answers: Answer[] }> => state.selectedAnswers,
  },

  actions: {

    async submitForm(): Promise<void> {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', this.selectedAnswers);
        this.voteCount += 1;
        alert('Данные успешно отправлены')
        console.log(response.data);
        this.resetForm();
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
      }
    },
    
    atLeastOneChecked(this): void {
      this.isChecked = this.forms[this.numberQuestion].answers.some(
        (answer: Answer) => answer.checked
      );
    },

    nextQuestion(this): void {
      if (this.numberQuestion < this.forms.length - 1) {
        this.numberQuestion += 1;
      }
    },

    resetForm(this): void {
      this.forms.forEach((form) => {
        form.answers.forEach((answer) => {
          answer.checked = false;
        });
      });
    
      localStorage.clear()
      this.numberQuestion = 0;
      this.voteCount = this.voteCount;
    },

    updateSelectedAnswers(this): void {
      this.selectedAnswers = this.forms.reduce((result, form) => {
        const selectedAnswers = form.answers.filter((answer) => answer.checked);
        if (selectedAnswers.length > 0) {
          result.push({
            question: form.question,
            answers: selectedAnswers,
          });
        }
        return result;
      }, [] as Array<{ question: string; answers: Answer[] }>);

      localStorage.setItem('formStoreData', JSON.stringify(this.$state));
    },
  },
});
