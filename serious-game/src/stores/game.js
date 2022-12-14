import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore( {
  id:'game',
  state: () => ({
    joueurs: ref(["test"]),
    questions: []
  }),
  getters: {
    allJoueurs: (state) => {
      return state.joueurs
    },
    oneJoueur: (state) => {
      return (id) => state.joueurs[id]
    },
    allQuestions: (state) =>{
      return state.questions
    },
    prendNumber: (state) => {
      return (question) => state.questions[question]
    }
  },
  actions: {
    addMembers(members) {
      this.joueurs = [... members]
    },
    addAMember(member) {
      this.joueurs.push(member)
    },
    addQuestions(value) {
      this.questions = [... value]
    }
  }

})