<script setup>
  import {ref, computed} from 'vue'
  import dice from './ButtonDice.vue'
  import Questions from './Questions/Questions.vue';
  import { useGameStore } from '@/stores/game'
  import FormMultiple from './Questions/FormMultiple.vue';
  import Challenge from './Questions/Challenge.vue';
  const gameStore = useGameStore()


  // on capte toute les questions à partir du game store de  pinia
  // computed actualise l'élément courant sous tout réactualiser, vu que on l'obtient par après
  // compute attends que un parametre change et donc le paramètre qui change c'est Axios qui charge les éléments
  const questions  = computed(() => {
    return gameStore.allQuestions
  })

  const parentquestions = (value) => {
    alert('La question est ' + gameStore.allQuestions[value ].question)
  }

</script>
<template>
    <ul>
      <Questions :question="question"  class="actuel " v-for="(question, key) in questions" :key="key">
       <!-- {{ question.qtype }} -->

      <FormMultiple v-if="question.qtype === 'form-multiple'" :question="key"  @clickdisplay="parentquestions" >
      </FormMultiple>

      <Challenge v-if="question.qtype === 'challenge'" :question="key"  @clickdisplay="parentquestions">
      </Challenge>

      </Questions>
      </ul>

</template>

<style scoped>

ul{
  display: flex;
  gap: 2rem;
  flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.actuel{
    border: 1px solid green;
    padding: 10px;
    list-style: none;
    border-radius: 12px;
}

  .actuel:hover{
    color: white;
    background-color: blueviolet;
    
  }
  
  .place{
    background-color: aqua  ;
  }
  
  </style>