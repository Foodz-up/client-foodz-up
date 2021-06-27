<template>
  <div>
    <img class="w-full h-56 object-cover" :src="require(`assets/img/${storeRestaurant.picture}`)">
    <div class="mx-4">
      <div class="mt-4">
        <h1 class="text-4xl font-bold">
          {{ storeRestaurant.name }}
        </h1>
        <p class="w-full text-primary text-xl font-medium">
          Temps d'attente estimé : {{ storeRestaurant.waiting }}
        </p>
        <span class="text-gray-500 text-xl font-medium">Note obtenue : {{ storeRestaurant.note }}</span>
      </div>
      <TableTime :timetable="storeRestaurant.timetable" />

      <h2 class="text-3xl font-semibold mt-24 mb-8 text-yellow-pastel">
        Menus
      </h2>

      <div class="grid gap-7 gap-y-12 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
        <CardItem
          v-for="menu in storeRestaurant.menus"
          :id="menu.id"
          :key="menu.id"
          :description="menu.description"
          :name="menu.name"
          :price="menu.price"
          :tag="menu.tag"
          :menu-articles="menu.articles"
          :restaurant-id="storeRestaurant.id"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0"
        />
      </div>

      <ListArticles :articles="storeRestaurant.articles" :restaurant-id="storeRestaurant.id" />

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListArticles from '~/components/Lists/ListArticles.vue'
import TableTime from '~/components/Tables/TableTime.vue'
import RestaurantStore from '~/store/restaurant/'
import CardItem from '~/components/Cards/CardItem.vue'

@Component({
  components: { ListArticles, TableTime, CardItem }
})
export default class SpecificRestaurant extends Vue {
  get storeRestaurant () {
    return RestaurantStore.getRestaurant(parseInt(this.$router.currentRoute.params.id))
  }
}
</script>

<style scoped>

</style>
