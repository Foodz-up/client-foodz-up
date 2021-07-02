<template>
  <div>
    <h1 class="text-center sm:text-left mt-1 text-4xl font-medium">
      Covid-19
    </h1>

    <ButtonAddToCart :item-number="itemTest" @addItemNumber="incrementItem()" @removeItemNumber="decrementItem()" />

    <hr class="mt-4 mb-12">
    <LoremFoodzUp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ButtonAddToCart } from 'ds-component-foodz-up'

@Component({
  components: { ButtonAddToCart }
})
export default class ProfileCovid extends Vue {
  itemTest: number = 0

  incrementItem () {
    this.itemTest += 1
  }

  decrementItem () {
    this.itemTest -= 1
  }
}
</script>

<style scoped>

</style>
