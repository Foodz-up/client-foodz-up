
<template>
  <div class="flex flex-col sm:flex-row-reverse justify-center items-center w-full">
    <img :src="require(`assets/img/${pictureName}`)" class="sm:max-h-96 w-auto sm:ml-3 mb-5 sm:mb-0">
    <div class="w-1/2 grid">
      <div>
        <h3 class="font-bold text-xl">
          {{ menu.name }}
        </h3>
        <p class="text-gray-500 text-lg">
          {{ menu.description }}
        </p>
        <div>
          <p class="text-lg font-bold text-yellow-pastel mt-5">
            Listes des menus
          </p>
          <ul>
            <li v-for="article in menu.articles" :key="article.id" class="font-medium text-sm mb-3">
              <p>
                {{ article.type }}
                <span class="font-bold">•</span>
                {{ article.name }}
              </p>
              <p class="text-gray-500 font-normal">
                {{ article.description }}
              </p>
            </li>
          </ul>
        </div>
        <div class="flex items-center">
          <p class="py-1 text-lg font-bold text-primary mr-2">
            {{ menu.price }} €
          </p>
          <div v-if="menu.tag" class="flex mt-auto">
            <span class="w-auto text-sm font-semibold text-primary bg-primary-30 px-2 py-1 rounded-full">
              {{ menu.tag }}
            </span>
          </div>
        </div>
      </div>
      <!-- TODO: place to cart at the end -->
      <ButtonAddToCart v-if="addToCartButton" class="mt-2 self-end" :item-number="itemNumber" @removeItemNumber="removeItemNumber()" @addItemNumber="addItemNumber()" />
      <ButtonFoodzUp v-if="moreThanOneAsQuantity" :title="'Ajouter au panier'" class="w-44 bg-primary hover:bg-primary-80 text-white" @buttonClicked="addMenusToCart()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ButtonAddToCart from '~/components/Buttons/ButtonAddToCart.vue'
import { IMenu } from '~/store/interfaces'

@Component({
  components: { ButtonAddToCart }
})
export default class CardSpecificMenu extends Vue {
    @Prop()
    menu!: IMenu

    @Prop({ required: true })
    restaurantId!: number

    @Prop({ default: true })
    addToCartButton!: boolean

    itemNumber: number = 0

    get moreThanOneAsQuantity (): boolean {
      return this.itemNumber > 0
    }

    addMenusToCart () {
      this.$emit('addMenusToCart', {
        quantity: this.itemNumber,
        menu: this.menu
      })
      this.itemNumber = 0
    }

    decrementItemNumber () {
      if (this.itemNumber > 0) { this.itemNumber -= 1 }
    }

    incrementItemNumber () {
      this.itemNumber += 1
    }

    get pictureName (): string {
      return this.menu.picture ? this.menu.picture : 'noarticle.jpg'
    }
}
</script>

<style scoped>
.min-h-custom{
  min-height: 200px;
}

</style>
