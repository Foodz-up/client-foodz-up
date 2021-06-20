<template>
  <div>
    <div class="grid gap-7 sm:grid-cols-2 xl:grid-cols-3 p-4">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :id="restaurant.id"
        :key="restaurant.id"
        :name="restaurant.name"
        :note="restaurant.note"
        :waiting="restaurant.waiting"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import RestaurantCard from '~/components/Cards/CardRestaurant.vue'

@Component({
  components: { RestaurantCard }
})
export default class Home extends Vue {
  // TODO: need type
  restaurants: Array<object> = [
    { id: 1, type: 'Fast food', name: 'Mcdonald', note: 4.5, waiting: '10-20 min' },
    { id: 2, type: 'Fast food', name: 'KFC', note: 4.2, waiting: '10-30 min' },
    { id: 3, type: 'Nourriture de confort', name: 'La Boucherie', note: 4.9, waiting: '30 min' },
    { id: 4, type: 'Pizza', name: 'Le Plaza', note: 4.9, waiting: '30-40 min' },
    { id: 5, type: 'Fast food', name: 'Dominos', note: 4.3, waiting: '10-20 min' },
    { id: 6, type: 'Fast food', name: 'Burger King', note: 4.7, waiting: '20-30 min' }
  ]
}
</script>

<style>

</style>
