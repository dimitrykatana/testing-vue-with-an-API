<!-- export default{
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions?sort=%7Bnumber%3A%22asc%22%7D')
      .then(response => (this.info = response))
  }
} -->

<script setup>
  import {ref} from 'vue'
  import {useGameStore} from '@/stores/game'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import dice from './ButtonDice.vue'
import axios from 'axios';

const gameStore = useGameStore()

const purple = ref([])



const api = () => {
      axios
      .get('https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions?sort=%7Bnumber%3A%22asc%22%7D')
      .then(response => {
        console.log(response.data)
         purple.value = response.data
         gameStore.addQuestions(response.data)
         //return purple;
         console.log(purple.value)
      })
    }
        

api()



</script>

<template>
  <WelcomeItem>
    <template>
    </template>
    <ul>
        <li class="actuel " v-for="(cases, key) in purple" :key="key">
        {{ cases.number }}</li>
      </ul>
  </WelcomeItem>

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