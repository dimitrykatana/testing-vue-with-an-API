<script setup>
    import {computed} from 'vue'
    import { useGameStore } from '@/stores/game'
    const gameStore = useGameStore()
    const props = defineProps(['question'])
    const emits = defineEmits(["clickdisplay"])
  
    // on capte toute les questions à partir du game store de  pinia
    // computed actualise l'élément courant sous tout réactualiser, vu que on l'obtient par après
    // compute attends que un parametre change et donc le paramètre qui change c'est Axios qui charge les éléments
    const questions  = computed(() => {
      return gameStore.allQuestions
    })
  
    const displayComponent = () => {
                emits("clickdisplay", props.question)
            }

  </script>
     
<template>
  
  <a href="#" @click="displayComponent"> Challenge</a>
        <slot></slot>   
</template>

  <style scoped>


  </style>