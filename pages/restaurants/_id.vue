<template>
  <div>
    <img class="w-full h-56 object-cover" :src="require(`assets/img/${restaurant.img}`)">
    <div class="mx-4">
      <div class="mt-4">
        <h1 class="text-3xl font-bold">
          {{ restaurant.name }}
        </h1>
        <p class="w-full text-primary font-medium">
          Temps d'attente estimé : {{ restaurant.waiting }}
        </p>
        <span class="text-gray-500 font-medium">Note obtenue : {{ restaurant.note }}</span>
      </div>
      <ListArticles :articles="restaurant.articles" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListArticles from '~/components/Lists/ListArticles.vue'

@Component({
  components: { ListArticles }
})
export default class SpecificRestaurant extends Vue {
    // TODO: need type
    restaurant: object = {
      img: 'noshop.jpg',
      name: 'Le petit rat porteur',
      note: 4.4,
      waiting: '10-20min',
      ouvertures: {
        lundi: { m_start: '10h', m_end: '15h', a_start: '18h', a_end: '00h' },
        mardi: { m_start: '10h', m_end: '15h', a_start: '18h', a_end: '00h' },
        mercredi: { m_start: '10h', m_end: '15h', a_start: '18h', a_end: '00h' },
        jeudi: { m_start: '10h', m_end: '15h', a_start: '18h', a_end: '00h' },
        vendredi: { m_start: '10h', m_end: '15h', a_start: '18h', a_end: '00h' },
        samedi: { m_start: '10h', m_end: '15h', a_start: '18h', a_end: '00h' },
        dimanche: { m_start: '10h', m_end: '15h', a_start: '18h', a_end: '00h' }
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
