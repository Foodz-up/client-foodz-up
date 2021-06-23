<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      Promotions
    </h1>

    <hr class="mt-4">
    <div class="bg-primary-15 py-2 flex items-center">
      <SvgBurger width="30" class="mx-4" />
      <span class="text-primary font-medium">
        Récupérez 15€ sur votre prochaine commande avec le code : M3rciF00dzUp
      </span>
    </div>
    <LoremFoodzUp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: { }
})
export default class ProfilePromote extends Vue {

}
</script>

<style scoped>

</style>
