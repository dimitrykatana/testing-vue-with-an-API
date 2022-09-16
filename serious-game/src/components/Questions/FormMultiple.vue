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
    <div class="question">
        <!-- <h1>question</h1> -->
    <a href="#" @click="displayComponent">form multiple</a>

        <slot>
        </slot>   
    </div>
</template>

<style scoped>
.question{
    border: 4px solid  rgba(167, 18, 18, 0.622);
    background-color: rgb(0, 0, 0);
}

</style>