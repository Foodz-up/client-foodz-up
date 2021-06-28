<template>
  <div>
    <h1 class="mt-1 text-4xl font-medium">
      {{ storeMenuFromRestaurant.name }}
    </h1>
    <hr class="mt-4 mb-12">

    <CardItem
      :item="storeMenuFromRestaurant"
      :restaurant-id="restaurantId"
      class="pb-5 sm:border-none sm:pb-0"
      @addMenusToCart="addMenusToCart"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardItem from '~/components/Cards/CardItem.vue'
import RestaurantStore from '~/store/restaurant'
import CartStore from '~/store/cart'
import { IArticle, IMenu } from '~/store/interfaces'

@Component({
  components: { CardItem }
})
export default class SpecificItem extends Vue {
  get storeMenuFromRestaurant () {
    return RestaurantStore.getMenuFromRestaurant(
      parseInt(this.$router.currentRoute.params.id),
      parseInt(this.$router.currentRoute.params.slug)
    )
  }

  get restaurantId (): number {
    return parseInt(this.$router.currentRoute.params.slug)
  }

  addMenusToCart (itemAndQuantity: {quantity: number, item:IMenu | IArticle}) {
    CartStore.addItemsToCart(itemAndQuantity.quantity, itemAndQuantity.item, this.storeMenuFromRestaurant.restaurantId)
  }
}
</script>

<style scoped>

</style>
