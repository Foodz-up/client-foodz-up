<template>
  <div>
    <h1 class="mt-1 text-4xl font-medium">
      {{ storeMenuFromRestaurant.name }}
    </h1>
    <hr class="mt-4 mb-12">

    <CardSpecificMenu
      :menu="storeMenuFromRestaurant"
      :restaurant-id="restaurantId"
      class="pb-5 sm:border-none sm:pb-0"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardSpecificMenu from '~/components/Cards/CardSpecificMenu.vue'
import RestaurantStore from '~/store/restaurant'

@Component({
  components: { CardSpecificMenu }
})
export default class extends Vue {
  get storeMenuFromRestaurant () {
    return RestaurantStore.getMenuFromRestaurant(
      parseInt(this.$router.currentRoute.params.id),
      parseInt(this.$router.currentRoute.params.slug)
    )
  }

  get restaurantId (): number {
    return parseInt(this.$router.currentRoute.params.slug)
  }
}
</script>

<style scoped>

</style>
