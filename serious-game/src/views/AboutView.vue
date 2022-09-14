<script setup>
import ButtonDice from '../components/ButtonDice.vue';

</script>

<template>
  <div class="about">
          <!-- si on veut bind un nombre on utilise v-bind (dans notre cas les deux points), sinon
      il le considère comme un string -->
    <!-- <ButtonDice/> -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
