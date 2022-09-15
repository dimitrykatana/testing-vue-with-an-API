<script setup>
import {ref, computed} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import ButtonDice from './components/ButtonDice.vue';
import { useGameStore } from '@/stores/game'
import Joueur from './components/Joueur.vue'
import axios from 'axios';

// import Tableau from './components/Tableau.vue';
const gameStore = useGameStore()


  const purple = ref([])

const api = () => {
      axios
      .get('https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions?sort=%7Bnumber%3A%22asc%22%7D')
      .then(response => {
         purple.value = response.data
         gameStore.addQuestions(response.data)
      })
    }

api()

const members = ['Rustre', 'Jean', 'Charles']
gameStore.addMembers(members)

const listMembers = computed( () => { return gameStore.allJoueurs})
console.log(listMembers)
const newUser = ref('')

const addUser = () => {
  gameStore.addAMember(newUser.value)
}

const parentjoueur = (value) => {
  alert('click in joueur n°' + value)
}

</script>

<template>

  <header>
    <div class="wrapper">
      <Joueur v-for="(item, key) in listMembers" :key="key" :ident="key" @clickjoueur="parentjoueur"></Joueur>

      <input type="text" v-model="newUser"> <button @click="addUser">+</button>
    
      <ul>
        <li v-for="(member, key) in listMembers" :key='key'>
        {{ member }}</li>
      </ul>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>

      </nav>
      
    </div>

  </header>
  <RouterView/>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>