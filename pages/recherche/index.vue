<template>
  <div>
    <SearchInput class="max-w-lg m-3 mt-5" :placeholder="'Restaurants, cuisines et autres...'" @searchChange="makeSearch" />
    <ListCategories v-if="isNotEmptyCategoryOption" :categories="categories" @chooseCategory="updateCategoryOption" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListCategories from '~/components/Lists/ListCategories.vue'

@Component({
  components: { ListCategories }
})
export default class Search extends Vue {
  // TODO: need type
  searchOptions: {
    category: string,
    restaurantName: string,
    // TODO: add other if needed
  } = {
    category: '',
    restaurantName: ''
  }

  // TODO: need type
  categories: Array<object> = [
    { name: 'Etoile', topCategory: true },
    { name: 'BBQ', topCategory: false },
    { name: 'Sushi', topCategory: false },
    { name: 'Halal', topCategory: false },
    { name: 'Pizza', topCategory: false },
    { name: 'Fast food', topCategory: false },
    { name: 'Burger', topCategory: false },
    { name: 'Sandwich', topCategory: false },
    { name: 'Dessert', topCategory: true },
    { name: 'Street food', topCategory: false },
    { name: 'Vegan', topCategory: false },
    { name: 'Italien', topCategory: true }
  ]

  makeSearch (stringFromSearchInput: string) {
    this.searchOptions.restaurantName = stringFromSearchInput
    this.updateSearchOptions()
  }

  updateCategoryOption (stringFromCategoryCard: string) {
    this.searchOptions.category = stringFromCategoryCard
    this.updateSearchOptions()
  }

  updateSearchOptions () {
    this.$router.push({ path: this.$route.path, query: this.searchOptions })
    // TODO: make our request
  }

  get isNotEmptyCategoryOption ():boolean {
    return this.searchOptions.category === ''
  }
}
</script>

<style scoped>

</style>
