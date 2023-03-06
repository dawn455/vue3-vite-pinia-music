import { defineStore } from 'pinia'

export const usePlayUrl = defineStore('main',{
  state:() => {
    return {
      musicUrl:''
    }
  }
})