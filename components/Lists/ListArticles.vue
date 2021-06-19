<template>
  <div>
    <div v-for="(articleArrayByType, index) in splitedByType" :key="index" class="w-full">
      <h2 class="text-2xl font-semibold mt-10 text-yellow-pastel">
        {{ articleArrayByType[0].type }}
      </h2>
      <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-2">
        <ArticleCard
          v-for="article in articleArrayByType"
          :id="article.id"
          :key="article.id"
          :description="article.description"
          :name="article.name"
          :price="article.price"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ArticleCard from '~/components/Cards/ArticleCard.vue'

@Component({
  components: { ArticleCard }
})

export default class ListArticles extends Vue {
    // TODO: need type
    @Prop({ required: true })
    articles!: Array<{ id: number, type: string, name: string, description: string, price: number }>

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
