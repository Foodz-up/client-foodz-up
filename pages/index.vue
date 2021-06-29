<template>
  <div>
    <div v-if="storeRestaurants" class="grid gap-7 sm:grid-cols-2 xl:grid-cols-3 p-4">
      <CardRestaurant
        v-for="restaurant in storeRestaurants"
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
import CardRestaurant from '~/components/Cards/CardRestaurant.vue'
import { ETypeRestaurant, IRestaurant } from '~/store/interfaces'
import RestaurantStore from '~/store/restaurant'

@Component({
  components: { CardRestaurant }
})
export default class Home extends Vue {
  modalOpen: boolean = false

  restaurants: Array<IRestaurant> = [
    {
      id: 1,
      type: ETypeRestaurant.FAST_FOOD,
      address: '10 rue de la prairie 69532',
      name: 'Mcdonald',
      note: 4.5,
      waiting: 10,
      articles: [
        { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
        { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
        { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
        { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
      ],
      menus: [
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
        },
        {
          id: 2,
          name: 'Menu maxi best of',
          description: 'Grand menu classique',
          articles: [
            { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
            { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
          ],
          price: 13.50
        },
        {
          id: 3,
          name: 'Menu duo',
          description: 'Grand menu classique pour deux',
          articles: [
            { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
            { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
            { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
          ],
          price: 23
        }
      ],
      timetable: {
        lundi: { mStart: '11:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        mardi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        mercredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        jeudi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        vendredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        samedi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        dimanche: { mStart: '12:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' }
      },
      picture: 'noshop.jpg'
    },
    {
      id: 2,
      type: ETypeRestaurant.FAST_FOOD,
      address: '10 rue de la prairie 69532',
      name: 'KFC',
      note: 4.2,
      waiting: 20,
      articles: [
        { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
        { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
        { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
        { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
      ],
      menus: [
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
        },
        {
          id: 2,
          name: 'Menu maxi best of',
          description: 'Grand menu classique',
          articles: [
            { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
            { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
          ],
          price: 13.50
        },
        {
          id: 3,
          name: 'Menu duo',
          description: 'Grand menu classique pour deux',
          articles: [
            { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
            { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
            { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
          ],
          price: 23
        }
      ],
      timetable: {
        lundi: { mStart: '11:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        mardi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        mercredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        jeudi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        vendredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        samedi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        dimanche: { mStart: '12:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' }
      },
      picture: 'noshop.jpg'
    },
    {
      id: 3,
      type: ETypeRestaurant.GASTRO,
      name: 'La Boucherie',
      note: 4.9,
      waiting: 30,
      articles: [
        { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
        { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
        { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
        { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
      ],
      menus: [
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
        },
        {
          id: 2,
          name: 'Menu maxi best of',
          description: 'Grand menu classique',
          articles: [
            { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
            { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
          ],
          price: 13.50
        },
        {
          id: 3,
          name: 'Menu duo',
          description: 'Grand menu classique pour deux',
          articles: [
            { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
            { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
            { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
          ],
          price: 23
        }
      ],
      timetable: {
        lundi: { mStart: '11:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        mardi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        mercredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        jeudi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        vendredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        samedi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
        dimanche: { mStart: '12:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' }
      },
      picture: 'noshop.jpg'
    },
    { id: 4, type: ETypeRestaurant.FAST_FOOD,
    address: '10 rue de la prairie 69532', name: 'Le Plaza', note: 4.9, waiting: 20, picture: 'noshop.jpg' },
    { id: 5, type: ETypeRestaurant.GASTRO, name: 'Dominos', note: 4.3, waiting: 20, picture: 'noshop.jpg' },
    { id: 6, type: ETypeRestaurant.GASTRO, name: 'Burger King', note: 4.7, waiting: 40, picture: 'noshop.jpg' }
  ]

  mounted () {
    RestaurantStore.setRestaurants(this.restaurants)
  }

  get storeRestaurants () {
    return RestaurantStore.restaurants
  }
}
</script>

<style>

</style>
