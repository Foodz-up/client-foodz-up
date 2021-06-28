<template>
  <div>
    <h1 class="mt-1 text-4xl font-medium">
      Vos commandes
    </h1>

    <hr class="mt-4 mb-8">
    <ListOrders v-if="storeOrders" :orders="storeOrders" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListOrders from '~/components/Lists/ListOrders.vue'
import { ETypeRestaurant, EOrderState, IOrder } from '~/store/interfaces'
import OrderStore from '~/store/order'

@Component({
  components: { ListOrders }
})
export default class Orders extends Vue {
    orders: Array<IOrder> = [
      {
        id: 1,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD },
        price: 18.00,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ]
      },
      {
        id: 2,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD },
        price: 20.99,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 }
        ]
      },
      {
        id: 3,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD },
        price: 11.50,
        status: EOrderState.ORDER_IN_PROGRESS,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ]
      },
      {
        id: 4,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD },
        price: 18.50,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ]
      },
      {
        id: 5,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD },
        price: 16.00,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 }
        ]
      },
      {
        id: 6,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD },
        price: 15.50,
        status: EOrderState.ORDER_IN_PROGRESS,
        date: Date.now(),
        driver: null,
        items: [
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ]
      },
      {
        id: 7,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD },
        price: 22.50,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ]
      }
    ]

    setOrders () {
      OrderStore.setOrders(this.orders)
    }

    get storeOrders ():Array<IOrder> {
      return OrderStore.orders
    }
}
</script>

<style scoped>

</style>
