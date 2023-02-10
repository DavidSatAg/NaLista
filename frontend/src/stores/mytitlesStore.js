// import { defineStore } from "pinia"

// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//       count: 0
//   }),
//   actions: {
//     increaseCount() {
//       this.count++
//     },
//     decreaseCount() {
//       this.count--
//     }
//   },
//   getters: {
//     oddOrEven: (state) => {
//       if (state.count % 2 === 0) return 'even'
//       return 'odd'
//     }
//   }
// })

import { defineStore } from "pinia"
import api from "@/api/titles.api.js"

export const useTitleCounter = defineStore("titleCounter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    // titleCounter(titlelist) {
    //   console.log('alo')
    //   this.count = titlelist.length
    // },
    async secondTitleCounter() {
      console.log('hello')
      const data = await api.getNumberOfTitles()
      this.count = data.number_of_titles
    }
  },
})


// atualiza MyTitleList, titlelist = [a, b, c], count = 3 -> count continua em 3, se atualiza TitlelistVIew, titlelist = [], count = 0

// teria que pegar 