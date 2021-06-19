<template>
  <div>
    <h1 class="mt-4 text-4xl text-center">
      Vos commandes
    </h1>
    <hr class="my-4">
    <ListCommandes :commandes="commandes" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListCommandes from '~/components/Lists/ListCommandes.vue'

@Component({
  components: { ListCommandes }
})
export default class Commandes extends Vue {
    // TODO: need type
    commandes: Array<object> = [
      { id: 1, restaurantName: 'McDonald', price: 18.50, status: 'Passée', date: Date.now, itemsNumber: 2, restaurantID: 2 },
      { id: 2, restaurantName: 'McDonald', price: 18.50, status: 'Passée', date: Date.now, itemsNumber: 2, restaurantID: 2 },
      { id: 3, restaurantName: 'McDonald', price: 18.50, status: 'En cours', date: Date.now, itemsNumber: 2, restaurantID: 2 },
      { id: 4, restaurantName: 'McDonald', price: 18.50, status: 'Passée', date: Date.now, itemsNumber: 2, restaurantID: 2 },
      { id: 5, restaurantName: 'McDonald', price: 18.50, status: 'Passée', date: Date.now, itemsNumber: 2, restaurantID: 2 },
      { id: 6, restaurantName: 'McDonald', price: 18.50, status: 'En cours', date: Date.now, itemsNumber: 2, restaurantID: 2 },
      { id: 7, restaurantName: 'McDonald', price: 18.50, status: 'Passée', date: Date.now, itemsNumber: 2, restaurantID: 2 }
    ]
}
</script>

<style scoped>

</style>
