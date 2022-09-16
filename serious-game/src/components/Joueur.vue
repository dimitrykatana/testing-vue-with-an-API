<template>
<div>
    <h1>joueur {{ident}}</h1>
    <a href="#" @click.prevent="alerteParent"> Click-me</a>
</div>
</template>

<script setup>
    import { useGameStore } from '@/stores/game'
    const gameStore = useGameStore()
    const props = defineProps(['ident'])
    // const theJoueur = gameStore.oneJoueur(props.ident)
    const emits = defineEmits(["clickjoueur"])
    // console.log(props.ident)
    const alerteParent =() => {
        emits("clickjoueur", props.ident)
    }
</script>