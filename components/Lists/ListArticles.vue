<template>
  <div>
    <div v-for="(articleArrayByType, index) in splitedByType" :key="index" class="w-full">
      <h2 class="text-3xl font-semibold mt-24 mb-8 text-yellow-pastel">
        {{ articleArrayByType[0].type }}
      </h2>
      <div class="grid gap-7 gap-y-12 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
        <CardArticle
          v-for="article in articleArrayByType"
          :key="article.id"
          :article="article"
          :restaurant-id="restaurantId"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0 shadow-xl bg-gray-100 rounded-xl"
          @addArticlesToCart="addArticlesToCart"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardArticle from '~/components/Cards/CardArticle.vue'
import { IArticle } from '~/store/interfaces'

@Component({
  components: { CardArticle }
})

export default class ListArticles extends Vue {
    // TODO: need type
    @Prop({ required: true })
    articles!: Array<IArticle>

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

    addArticlesToCart (menuAndQuantity: object) {
      this.$emit('addArticlesToCart', menuAndQuantity)
    }
}
</script>

<style scoped>

</style>
