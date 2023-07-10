<template>
  <div class="my-4 px-6">
    <div class="flex gap-8 justify-between">
        <div class="w-2/5">
            <h3 class="capitalize mb-6 bg-gradient-to-r from-sky-900 to-gray-800 bg-opacity-50 px-4 py-3 rounded-lg">Question {{ question }}</h3>
            <HighCode v-if="activeQuestion.module.isCode"
                class="code"
                :codeValue="activeQuestion.module.value"
                theme="dark"
                langName="javascript"
            />
          <div class="flex items-center gap-8" v-else v-html="activeQuestion.module.value"></div>

        </div>
        <div class="w-2/5">
            <h3 class="capitalize mb-6 bg-gradient-to-r from-sky-900 to-gray-800 bg-opacity-20 px-4 py-3 rounded-lg">
              {{ activeQuestion.question }}
            </h3>
            <ol :class="{'clicked': clicked}" class="leading-8 ml-6 space-y-4 list-[lower-alpha] list-inside" type="a">
                <li @click="clicked = true" v-for="option in activeQuestion.options" class="cursor-pointer"
                    :class="{'correct-answer': option === activeQuestion.answer, 'hover:text-green-100': !clicked}"
                >{{ option }}</li>
            </ol>
        </div>
    </div>
    <div class="flex justify-between">
      <button :disabled="question <= 1" :class="{'bg-gray-500': question <= 1, 'bg-green-500 text-white hover:bg-green-700': question > 1}" @click="handlePrevious" class="px-5 py-3 transition duration-300 mt-8">Previous</button>
      <button :disabled="question >= questions.length" :class="{'bg-gray-500': question >= questions.length, 'bg-green-500 text-white hover:bg-green-700': question < questions.length}" @click="handleNext" class="px-5 py-3 transition duration-300 mt-8">Next</button>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
import { questions } from "./TriviaQuestions.js"

let question = ref(1);
let clicked = ref(false);

const handlePrevious = () => {
  if (question.value > 1) {
    question.value--;
    clicked.value = false;
  }
}

const handleNext = () => {
  if (question.value < questions.length) {
    question.value++;
    clicked.value = false;
  }
}

let activeQuestion = computed(() => {
  return questions[question.value - 1];
})

</script>

<style>
.clicked li {
  color: rgb(185 28 28);
}
.clicked .correct-answer {
  color: rgb(134, 239, 172);
}
</style>
