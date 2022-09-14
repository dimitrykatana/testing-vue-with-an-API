<script>
</script>

<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import dice from './ButtonDice.vue'
const tableau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 
                 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
                 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
                 48
                ]

const index = 0;


</script>

<template>
  <WelcomeItem>
    <template>
    </template>
    <ul>
        <li class="actuel " v-for="(cases, key) in tableau">
        {{ cases }}</li>
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