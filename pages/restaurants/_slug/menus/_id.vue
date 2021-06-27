<template>
  <div>
    <h1 class="mt-1 text-4xl font-medium">
      {{ storeMenuFromRestaurant.name }}
    </h1>
    <hr class="mt-4 mb-12">

    <CardMenu
      :id="storeMenuFromRestaurant.id"
      :description="storeMenuFromRestaurant.description"
      :name="storeMenuFromRestaurant.name"
      :price="storeMenuFromRestaurant.price"
      :tag="storeMenuFromRestaurant.tag"
      :menu-articles="storeMenuFromRestaurant.articles"
      class="pb-5 sm:border-none sm:pb-0"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardMenu from '~/components/Cards/CardMenu.vue'
import RestaurantStore from '~/store/restaurant'

@Component({
  components: { CardMenu }
})
export default class extends Vue {
  get storeMenuFromRestaurant () {
    return RestaurantStore.getMenuFromRestaurant(
      parseInt(this.$router.currentRoute.params.id),
      parseInt(this.$router.currentRoute.params.slug)
    )
  }
}
</script>

<style scoped>

</style>
