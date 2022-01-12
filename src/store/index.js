import { createStore } from 'vuex'
import inbox from './inbox/index.js';
import register from "./register/index.js"
 
const store = createStore({
  state() {
      return {
        selectCheckBox : false,
        toggleMenu : false,
      }
  },
  mutations: {
    selectAllCheckBox(state){
      state.selectCheckBox = !state.selectCheckBox
    },
    toggleSidebar(state){
      state.toggleMenu = !state.toggleMenu
    }
  },
  actions: {
    selectAllCheckBox(context){
      context.commit("selectAllCheckBox")
    },
    toggleSidebar(context){
      context.commit('toggleSidebar')
    }
  },
  getters : {
    showSelected(state){
      return state.selectCheckBox
    },
    ShowSidebar(state){
      return state.toggleMenu
    }
  },
  modules: {
    inbox : inbox,
    register : register
  }
})
export default store