<template>
  <div>
    <div v-for="(articleArrayByType, index) in splitedByType" :key="index" class="w-full">
      <h2 class="text-3xl font-semibold mt-24 mb-8 text-yellow-pastel">
        {{ articleArrayByType[0].type }}
      </h2>
      <div class="grid gap-7 gap-y-12 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
        <CardItem
          v-for="article in articleArrayByType"
          :id="article.id"
          :key="article.id"
          :description="article.description"
          :name="article.name"
          :price="article.price"
          :tag="article.tag"
          :restaurant-id="restaurantId"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardItem from '~/components/Cards/CardItem.vue'

@Component({
  components: { CardItem }
})

export default class ListArticles extends Vue {
    // TODO: need type
    @Prop({ required: true })
    articles!: Array<{ id: number, type: string, name: string, description: string, price: number, tag: string, menuArticles: Array<object> }>

    @Prop({ required: true })
    restaurantId!: number

    get splitedByType () {
      const newObject = this.articles.reduce(function (obj, value) {
        const key = value.type
        // @ts-ignore
        if (obj[key] == null) { obj[key] = [] }

        // @ts-ignore
        obj[key].push(value)
        return obj
      }, {})

      return newObject
    }
}
</script>

<style scoped>

</style>
