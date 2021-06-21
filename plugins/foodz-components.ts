import Vue from 'vue'
import InputSearch from '~/components/Inputs/InputSearch.vue'
import ButtonFoodzUp from '~/components/Buttons/ButtonFoodzUp.vue'

const components = { InputSearch, ButtonFoodzUp }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
