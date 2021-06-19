import Vue from 'vue'
import SearchInput from '~/components/Inputs/SearchInput.vue'

const components = { SearchInput }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
