<template>
  <div>
    <div v-if="storeRestaurants" class="grid gap-7 sm:grid-cols-2 xl:grid-cols-3 p-4">
      <CardRestaurant
        v-for="restaurant in storeRestaurants"
        :key="restaurant._id"
        class="shadow-xl bg-gray-100 rounded-xl"
        :_id="restaurant._id"
        :name="restaurant.name"
        :note="restaurant.note"
        :waiting="restaurant.waiting"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardRestaurant from '~/components/Cards/CardRestaurant.vue'
import { ETypeRestaurant, IRestaurant } from '~/store/interfaces'
import RestaurantStore from '~/store/restaurant'

@Component({
  components: { CardRestaurant }
})
export default class Home extends Vue {
  modalOpen: boolean = false

  mounted () {
    RestaurantStore.getRestaurants()
  }

  get storeRestaurants () {
    return RestaurantStore.restaurants
  }
}
</script>

<style>

</style>
