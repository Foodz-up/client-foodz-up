<template>
  <div>
    <p><span class="font-medium text-lg">Prix de la commande :</span> {{ orderPrice }} €</p>

    <div class="grid gap-7 gap-y-12 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
      <CardItem
        v-for="item in itemsInCart"
        :key="item.id"
        :item="item.item"
        :restaurant-id="item.restaurantId"
        :add-to-cart-button="false"
        :remove-from-cart="true"
        class="pb-5 sm:border-none sm:pb-0 mb-3"
        @removeItemFromCart="removeItemFromCart(item.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CartStore from '~/store/cart'
import { ICart } from '~/store/interfaces'
import CardItem from '~/components/Cards/CardItem.vue'

@Component({
  components: { CardItem }
})
export default class Home extends Vue {
  get itemsInCart ():Array<ICart> {
    return CartStore.items
  }

  removeItemFromCart (id: number) {
    CartStore.removeItemsFromCart(id)
  }

  get orderPrice ():number {
    return this.itemsInCart.reduce((accumulator, item) => accumulator + item.item.price, 0)
  }
}
</script>

<style>

</style>
