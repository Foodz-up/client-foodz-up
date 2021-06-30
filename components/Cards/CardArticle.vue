<template>
  <div class="flex flex-col sm:flex-row-reverse justify-between w-full min-h-custom max-w-sm">
    <img :src="require(`assets/img/${pictureName}`)" class="object-cover w-5/12 ml-3 rounded-r-lg">
    <div class="w-7/12 grid p-4">
      <div>
        <h3 class="font-bold">
          {{ article.name }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{ article.description }}
        </p>
        <p class="py-1 text-sm font-medium mr-2">
          {{ article.price }} €
        </p>
        <div v-if="article.tag" class="flex mt-auto">
          <span class="w-auto text-sm font-semibold text-primary bg-primary-30 px-2 py-1 rounded-full">
            {{ article.tag }}
          </span>
        </div>
      </div>
      <!-- TODO: place to cart at the end -->
      <ButtonAddToCart v-if="addToCartButton" class="mt-2 self-end" :item-number="itemNumber" @removeItemNumber="decrementItemNumber()" @addItemNumber="incrementItemNumber()" />
      <ButtonFoodzUp v-if="moreThanOneAsQuantity" :title="'Ajouter au panier'" class="w-44 bg-primary hover:bg-primary-80 text-white" @buttonClicked="addArticlesToCart()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ButtonAddToCart from '~/components/Buttons/ButtonAddToCart.vue'
import { IArticle } from '~/store/interfaces'

@Component({
  components: { ButtonAddToCart }
})
export default class CardArticle extends Vue {
    @Prop()
    article!: IArticle

    @Prop({ required: true })
    restaurantId!: number

    @Prop({ default: true })
    addToCartButton!: boolean

    itemNumber: number = 0

    get moreThanOneAsQuantity (): boolean {
      return this.itemNumber > 0
    }

    decrementItemNumber () {
      if (this.itemNumber > 0) { this.itemNumber -= 1 }
    }

    incrementItemNumber () {
      this.itemNumber += 1
    }

    addArticlesToCart () {
      this.$emit('addArticlesToCart', {
        quantity: this.itemNumber,
        item: this.article
      })
      this.itemNumber = 0
    }

    get pictureName (): string {
      return this.article.picture ? this.article.picture : 'noarticle.jpg'
    }
}
</script>

<style scoped>

</style>
