<template>
  <div>
    <h1 class="mt-4 text-4xl text-center">
      Vos commandes
    </h1>
    <hr class="my-4">
    <ListOrders :orders="orders" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListOrders from '~/components/Lists/ListOrders.vue'

@Component({
  components: { ListOrders }
})
export default class Orders extends Vue {
    // TODO: need type
    orders: Array<object> = [
      { id: 1, restaurantName: 'McDonald', price: 18.00, status: 'Passée', date: Date.now, itemsNumber: 3, restaurantID: 2 },
      { id: 2, restaurantName: 'KFC', price: 20.99, status: 'Passée', date: Date.now, itemsNumber: 5, restaurantID: 3 },
      { id: 3, restaurantName: 'La Boucherie', price: 11.50, status: 'En cours', date: Date.now, itemsNumber: 1, restaurantID: 8 },
      { id: 4, restaurantName: 'Vivano', price: 18.50, status: 'Passée', date: Date.now, itemsNumber: 3, restaurantID: 2 },
      { id: 5, restaurantName: 'McDonald', price: 16.00, status: 'Passée', date: Date.now, itemsNumber: 2, restaurantID: 6 },
      { id: 6, restaurantName: 'Burger King', price: 15.50, status: 'En cours', date: Date.now, itemsNumber: 2, restaurantID: 2 },
      { id: 7, restaurantName: 'McDonald', price: 22.50, status: 'Passée', date: Date.now, itemsNumber: 4, restaurantID: 4 }
    ]
}
</script>

<style scoped>

</style>
