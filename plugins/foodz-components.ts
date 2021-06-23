import Vue from 'vue'
import InputSearch from '~/components/Inputs/InputSearch.vue'
import ButtonFoodzUp from '~/components/Buttons/ButtonFoodzUp.vue'
import LoremFoodzUp from '~/components/Others/LoremFoodzUp.vue'

const components = { InputSearch, ButtonFoodzUp, LoremFoodzUp }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
