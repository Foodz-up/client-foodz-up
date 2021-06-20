import Vue from 'vue'
import InputSearch from '~/components/Inputs/InputSearch.vue'

const components = { InputSearch }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
