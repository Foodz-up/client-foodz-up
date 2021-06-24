import Vue from 'vue'
import InputSearch from '~/components/Inputs/InputSearch.vue'
import ButtonFoodzUp from '~/components/Buttons/ButtonFoodzUp.vue'
import ButtonSimpleText from '~/components/Buttons/ButtonSimpleText.vue'
import ButtonLogOut from '~/components/Buttons/ButtonLogOut.vue'
import LoremFoodzUp from '~/components/Others/LoremFoodzUp.vue'

const components = { InputSearch, ButtonFoodzUp, LoremFoodzUp, ButtonSimpleText, ButtonLogOut }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
