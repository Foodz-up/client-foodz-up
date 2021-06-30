<template>
  <div>
    <img v-if="storeRestaurant" class="w-full h-56 object-cover" :src="require(`assets/img/${restaurantPicture}`)">
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
        <CardMenu
          v-for="menu in storeRestaurant.menus"
          :key="menu.id"
          :menu="menu"
          :restaurant-id="storeRestaurant._id"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0"
          @addMenusToCart="addItemsToCart"
        />
      </div>

      <ListArticles :articles="storeRestaurant.articles" :restaurant-id="storeRestaurant.id" @addArticlesToCart="addItemsToCart" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListArticles from '~/components/Lists/ListArticles.vue'
import TableTime from '~/components/Tables/TableTime.vue'
import RestaurantStore from '~/store/restaurant/'
import CartStore from '~/store/cart/'
import CardMenu from '~/components/Cards/CardMenu.vue'
import { IArticle, IMenu, IRestaurant } from '~/store/interfaces'

@Component({
  components: { ListArticles, TableTime, CardMenu }
})
export default class SpecificRestaurant extends Vue {
  get storeRestaurant () {
    return RestaurantStore.getRestaurant(this.$router.currentRoute.params.id)
  }

  get restaurantPicture () {
    return this.storeRestaurant.picture ? this.storeRestaurant.picture : 'noshop.jpg'
  }

  addItemsToCart (itemAndQuantity: {quantity: number, item:IMenu | IArticle}) {
    CartStore.addItemsToCart(itemAndQuantity.quantity, itemAndQuantity.item, this.getRestaurant(this.$router.currentRoute.params.id))
  }

  getRestaurant (_id: string): IRestaurant | undefined {
    return RestaurantStore.getRestaurant(_id)
  }
}
</script>

<style scoped>

</style>
