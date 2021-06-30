<template>
  <nuxt-link :to="`/restaurants/${_id}`" class="w-full">
    <img :src="require(`assets/img/${img}`)" class="w-full rounded-t-lg">
    <div class="flex justify-between mt-2 p-2">
      <h2 class="text-left font-bold">
        {{ name }}
      </h2>
      <div class="text-xs rounded-full bg-gray-200 flex items-center justify-center p-1">
        <span>
          {{ note }}
        </span>
      </div>
    </div>
    <div class="flex justify-between p-2">
      <p class="text-left text-sm w-full text-gray-500">
        Livraison Gratuite
      </p>
      <p class="text-right text-sm w-full text-primary font-semibold">
        Livrais sous : {{ waiting }} min
      </p>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CardRestaurant extends Vue {
    @Prop({ required: true })
    _id!: string

    @Prop({ default: 'Sans nom' })
    name!: string

    @Prop({ default: 'noshop.jpg' })
    img!: string

    @Prop({ required: true })
    waiting!: string

    @Prop({ default: 2.3 })
    note!: number
}
</script>

<style scoped>

</style>
