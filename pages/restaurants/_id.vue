<template>
  <div>
    <img class="w-full h-56 object-cover" :src="require(`assets/img/${restaurant.img}`)">
    <div class="mx-4">
      <div class="mt-4">
        <h1 class="text-4xl font-bold">
          {{ restaurant.name }}
        </h1>
        <p class="w-full text-primary text-xl font-medium">
          Temps d'attente estimé : {{ restaurant.waiting }}
        </p>
        <span class="text-gray-500 text-xl font-medium">Note obtenue : {{ restaurant.note }}</span>
      </div>
      <TableTime :timetable="restaurant.timetable" />

      <ListArticles :articles="restaurant.articles" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListArticles from '~/components/Lists/ListArticles.vue'
import TableTime from '~/components/Tables/TableTime.vue'

@Component({
  components: { ListArticles, TableTime }
})
export default class SpecificRestaurant extends Vue {
    // TODO: need type
    restaurant: object = {
      img: 'noshop.jpg',
      name: 'Le petit rat porteur',
      note: 4.4,
      waiting: '10-20 min',
      timetable: {
        lundi: { mStart: '10h', mEnd: '15h', aStart: '18h', aEnd: '00h' },
        mardi: { mStart: '10h', mEnd: '15h', aStart: '18h', aEnd: '00h' },
        mercredi: { mStart: '10h', mEnd: '15h', aStart: '18h', aEnd: '00h' },
        jeudi: { mStart: '10h', mEnd: '15h', aStart: '18h', aEnd: '00h' },
        vendredi: { mStart: '10h', mEnd: '15h', aStart: '18h', aEnd: '00h' },
        samedi: { mStart: '10h', mEnd: '15h', aStart: '18h', aEnd: '00h' },
        dimanche: { mStart: '10h', mEnd: '15h', aStart: '18h', aEnd: '00h' }
      },
      articles: [
        { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
        { id: 2, type: 'Entrée', name: 'Salade César', description: 'Servi sous format d\'entrée', price: 4.00 },
        { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
        { id: 4, type: 'Plat', name: 'Pavé de saumon', description: 'Servi avec salade / purée maison pu riz', price: 17.20 },
        { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
        { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
        { id: 7, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 },
        { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
      ]
    }
}
</script>

<style scoped>

</style>
