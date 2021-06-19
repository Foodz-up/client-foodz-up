<template>
  <nuxt-link :to="`/restaurants/${id}`" class="flex flex-row-reverse justify-between w-full">
    <img :src="require(`assets/img/${img}`)" class="w-1/3 ml-3">
    <div class="w-2/3">
      <h3 class="font-bold">
        {{ name }}
      </h3>
      <p class="text-gray-500 text-sm">
        {{ description }}
      </p>
      <p class="text-sm font-medium">
        {{ price }} €
      </p>
      <div v-if="tag" class="flex mt-2">
        <span class=" w-auto text-sm font-semibold text-primary bg-primary-30 px-2 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ArticleCard extends Vue {
    @Prop({ required: true })
    id!: number

    @Prop({ default: 'Sans nom' })
    name!: string

    @Prop()
    description!: string

    @Prop({ default: 'noarticle.jpg' })
    img!: string

    @Prop({ required: true })
    price!: number

    @Prop()
    tag!: string
}
</script>

<style scoped>

</style>
