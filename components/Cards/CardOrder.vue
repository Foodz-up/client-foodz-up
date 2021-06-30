<template>
  <div class="flex flex-row justify-between w-full">
    <img :src="require(`assets/img/${picture}`)" class="object-cover w-1/3 mr-4">
    <div class="w-2/3 py-4">
      <h3 class="font-bold text-xl">
        {{ restaurant.name }}
      </h3>
      <div class="flex flex-col">
        <p class="text-gray-500 text-lg">
          {{ itemsNumber }} élément(s)
        </p>
        <p class="text-lg text-gray-500 font-semibold">
          {{ price }} €
        </p>
      </div>
      <div class="flex flex-col">
        <p class="text-lg text-gray-500">
          {{ dateFormat(date) }}
        </p>
        <p class="text-lg text-gray-800 font-medium underline">
          {{ status }}
        </p>
      </div>
      <div class="flex mt-2">
        <nuxt-link v-if="status === 'Passée'" :to="`/restaurants/${restaurant.id}`" class="text-lg py-1 px-2 rounded-full font-medium bg-gray-200">
          Voir le restaurant
        </nuxt-link>
        <nuxt-link v-else :to="`/commandes/${id}`" class="text-lg py-1 px-2 rounded-full font-medium text-primary bg-primary-15">
          Voir la commande
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IArticle, IMenu, IRestaurant } from '~/store/interfaces'

@Component
export default class CardOrder extends Vue {
    @Prop({ required: true })
    id!: object

    @Prop({ default: 'Sans nom' })
    restaurant!: IRestaurant

    @Prop({ default: Date.now() })
    date!: Date

    @Prop({ default: 'noshop.jpg' })
    picture!: string

    @Prop({ required: true })
    price!: number

    @Prop({ required: true })
    itemsNumber!: number

    @Prop({ required: true })
    items!: Array<IMenu | IArticle>

    @Prop()
    status!: 'Passée' | 'En cours'

    dateFormat (dateString: number): string {
      const date = new Date(dateString)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      // @ts-ignore
      return date.toLocaleDateString('fr', options)
    }
}
</script>

<style scoped>

</style>
