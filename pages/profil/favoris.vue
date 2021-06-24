<template>
  <div>
    <h1 class="mt-1 text-4xl font-medium">
      Vos favoris
    </h1>

    <hr class="mt-4 mb-12">
    <div>
      <span>Vos repas favoris arrivent bientôt, suivez l'actualité : </span>
      <a href="https://www.linkedin.com/in/thomas-clmt/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">https://www.linkedin.com/in/thomas-clmt/</a>
    </div>
    <LoremFoodzUp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: { }
})
export default class ProfileFavourite extends Vue {

}
</script>

<style scoped>

</style>
