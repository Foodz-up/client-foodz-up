<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      {{ menu.name }}
    </h1>
    <hr class="mt-4 mb-12">

    <CardMenu
      :id="menu.id"
      :description="menu.description"
      :name="menu.name"
      :price="menu.price"
      :tag="menu.tag"
      :menu-articles="menu.menuArticles"
      class="pb-5 sm:border-none sm:pb-0"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardMenu from '~/components/Cards/CardMenu.vue'

@Component({
  components: { CardMenu }
})
export default class extends Vue {
  // TODO: need type
  menu: object = {
    id: 9,
    type: 'Menu',
    name: 'Happy Meal',
    description: 'Repas de luxe pour enfants',
    price: 40,
    menuArticles: [{ id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
      { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 },
      { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
      { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }]
  }
}
</script>

<style scoped>

</style>
