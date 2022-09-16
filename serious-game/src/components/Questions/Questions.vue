<script setup>
        import { useGameStore } from '@/stores/game'
        const gameStore = useGameStore()
        const props = defineProps(['question'])
        const Nombre = gameStore.prendNumber(props.question)
        const emits = defineEmits(["clickjoueur"])

   
</script>

<template>
    <li>
        <h1>{{ question.number }}</h1>
        <slot></slot>   
    </li>
</template>
    