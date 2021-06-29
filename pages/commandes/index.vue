<template>
  <div>
    <h1 class="mt-1 text-4xl font-medium">
      Vos commandes
    </h1>

    <hr class="mt-4 mb-8">
    <div v-if="storeOrders">
      <ListOrders :orders="storeOrders" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListOrders from '~/components/Lists/ListOrders.vue'
import { ETypeRestaurant, EOrderState, IOrder } from '~/store/interfaces'
import OrderStore from '~/store/order'
import AuthStore from '~/store/auth'

@Component({
  components: { ListOrders }
})
export default class Orders extends Vue {
    orders: Array<IOrder> = [
      {
        id: 1,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD, address: '10 rue de la prairie 69532' },
        price: 18.00,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ],
        client: AuthStore.user
      },
      {
        id: 2,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD, address: '10 rue de la prairie 69532' },
        price: 20.99,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 }
        ],
        client: AuthStore.user
      },
      {
        id: 3,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD, address: '10 rue de la prairie 69532' },
        price: 11.50,
        status: EOrderState.ORDER_IN_PROGRESS,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ],
        client: AuthStore.user
      },
      {
        id: 4,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD, address: '10 rue de la prairie 69532' },
        price: 18.50,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ],
        client: AuthStore.user
      },
      {
        id: 5,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD, address: '10 rue de la prairie 69532' },
        price: 16.00,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 }
        ],
        client: AuthStore.user
      },
      {
        id: 6,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD, address: '10 rue de la prairie 69532' },
        price: 15.50,
        status: EOrderState.ORDER_IN_PROGRESS,
        date: Date.now(),
        driver: null,
        items: [
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 },
          {
            id: 1,
            name: 'Menu best of',
            description: 'Menu classique',
            articles: [
              { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
              { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
              { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
            ],
            price: 10
          }
        ],
        client: AuthStore.user
      },
      {
        id: 7,
        restaurant: { id: 1, name: 'McDo', type: ETypeRestaurant.FAST_FOOD, address: '10 rue de la prairie 69532' },
        price: 22.50,
        status: EOrderState.PASSED,
        date: Date.now(),
        driver: null,
        items: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ],
        client: AuthStore.user
      }
    ]

    mounted () {
      OrderStore.setOrders(this.orders)
    }

    get storeOrders ():Array<IOrder> {
      return OrderStore.orders
    }
}
</script>

<style scoped>

</style>
