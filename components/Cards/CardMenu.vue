
<template>
  <div class="flex flex-col sm:flex-row-reverse justify-between w-full min-h-custom max-w-sm">
    <img :src="require(`assets/img/${pictureName}`)" class="object-cover w-5/12 ml-3">
    <div class="w-7/12 grid">
      <div>
        <h3 class="font-bold">
          {{ menu.name }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{ menu.description }}
        </p>
        <div v-if="menu.articles">
          <ul class="pl-2">
            <li v-for="article in menu.articles" :key="article.id">
              {{ article.name }}
            </li>
          </ul>
          <nuxt-link :to="`/restaurants/${restaurantId}/menus/${menu.id}`">
            <ButtonFoodzUp :title="'Voir plus'" class="bg-gray-200 hover:bg-gray-300 text-gray-500" />
          </nuxt-link>
        </div>
        <p class="py-1 text-sm font-medium mr-2">
          {{ menu.price }} €
        </p>
        <div v-if="menu.tag" class="flex mt-auto">
          <span class="w-auto text-sm font-semibold text-primary bg-primary-30 px-2 py-1 rounded-full">
            {{ menu.tag }}
          </span>
        </div>
      </div>
      <!-- TODO: place to cart at the end -->
      <ButtonAddToCart v-if="addToCartButton" class="mt-2 self-end" :item-number="itemNumber" @removeItemNumber="decrementItemNumber()" @addItemNumber="incrementItemNumber()" />
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
export default class CardMenu extends Vue {
    @Prop()
    menu!: IMenu

    @Prop({ required: true })
    restaurantId!: string

    @Prop({ default: true })
    addToCartButton!: boolean

    itemNumber: number = 0

    get moreThanOneAsQuantity (): boolean {
      return this.itemNumber > 0
    }

    addMenusToCart () {
      this.$emit('addMenusToCart', {
        quantity: this.itemNumber,
        item: this.menu
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
