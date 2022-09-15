<script setup>
  import { ref } from "vue"
  
//state
const diceValue = ref(0)
//endstate

const dice =() => {
   let  dicer = Math.floor(Math.random() * 6 + 1)
   // on utilise ref donc on met value 
   diceValue.value= dicer;
  
  }

</script>

<template>
  <div class="greetings">
    <h3>
        le résultat du dé est de {{ diceValue }}
    </h3>
    <button @click="dice" >Avancer </button>
  </div>
</template>

<style scoped>

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

</style>