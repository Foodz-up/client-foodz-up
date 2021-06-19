<template>
  <div>
    <div v-for="(commandeArrayByStatus, index) in splitedByStatus" :key="index" class="w-full mx-4">
      <h2 class="text-2xl font-semibold mt-24 mb-8 text-yellow-pastel">
        {{ commandeArrayByStatus[0].status }}
      </h2>
      <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <CommandCard
          v-for="commande in commandeArrayByStatus"
          :id="commande.id"
          :key="commande.id"
          :restaurant-name="commande.restaurantName"
          :status="commande.status"
          :price="commande.price"
          :items-number="commande.itemsNumber"
          :restaurant-id="commande.restaurantID"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0 w-auto"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CommandCard from '~/components/Cards/CommandCard.vue'

@Component({
  components: { CommandCard }
})

export default class ListCommandes extends Vue {
    // TODO: need type
    @Prop({ required: true })
    commandes!: Array<
    { id: number, restaurantName: string, price: number, status: string, date: Date, itemsNumber: number, restaurantId: number }
    |
    { id: number, restaurantName: string, price: number, status: string, date: Date, itemsNumber: number, restaurantId: number }
    >

    get splitedByStatus () {
      const newObject = this.commandes.reduce(function (obj, value) {
        const key = value.status
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
