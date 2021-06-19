<template>
  <div>
    <SearchInput class="w-1/2 mt-2" :placeholder="'Restaurants, cuisines et autres...'" @searchChange="makeSearch" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Search extends Vue {
  makeSearch (stringFromSearchInput:string) {
    // TODO: make your request
    console.log(stringFromSearchInput)
  }
}
</script>

<style scoped>

</style>
