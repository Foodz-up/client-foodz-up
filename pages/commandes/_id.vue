<template>
  <div v-if="order" class="p-4">
    <h1 class="mt-4 mb-10 text-4xl text-start">
      <span class="font-semibold">{{ order.status }}</span> : Commande du {{ dateFormat(order.date) }}
    </h1>
    <LoadStatusOrder :status="order.status" />

    <div class="mt-10">
      <h2 class="text-2xl">
        Rappel de votre commande :
      </h2>
      <p class="text-xl text-primary font-medium my-4">
        <nuxt-link :to="`/restaurants/${order.restaurant._id}`">
          {{ order.restaurant.name }} ({{ order.restaurant.address }})
        </nuxt-link> -> {{ order.client.address }}
      </p>
      <p><span class="font-medium text-lg">Nombre d'articles :</span> {{ order.items.length }}</p>
      <p><span class="font-medium text-lg">Prix de la commande :</span> {{ order.price }} €</p>
      <p class="font-medium text-lg">
        Liste d'articles :
      </p>
      <ul class="ml-3">
        <li v-for="(item,index) in order.items" :key="index" class="flex items-center">
          <span class="mx-1 font-bold text-gray-500 text-lg">•</span>
          <p>{{ item.name }} :</p>
          <p class="font-semibold text-gray-500 text-sm ml-1">
            {{ item.price }} €
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListOrders from '~/components/Lists/ListOrders.vue'
import LoadStatusOrder from '~/components/Others/LoadStatusOrder.vue'
import { IOrder, EOrderState } from '~/store/interfaces'
import OrderStore from '~/store/order'

@Component({
  components: { ListOrders, LoadStatusOrder }
})
export default class Orders extends Vue {
    order: IOrder | undefined = OrderStore.getOrder(parseInt(this.$router.currentRoute.params.id))

    currentLocation: {} = {}
    circleOptions: {} = {}
    locations: Array<{ lat: number, lng: number}> = [
      {
        lat: 50.283333,
        lng: 2.783333
      },
      {
        lat: 45.815,
        lng: 15.9819
      },
      {
        lat: 45.12,
        lng: 16.21
      }
    ]

    pins: { selected: string, notSelected: string } = {
      selected: 'data:image/png;base64,iVBORw0KGgo...',
      notSelected: 'data:image/png;base64,iVBORw0KGgo...'
    }

    mapStyle: [] = []
    clusterStyle: Array<{ url: string, width: number, height: number, textColor: string }> = [
      {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
        width: 56,
        height: 56,
        textColor: '#fff'
      }
    ]

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

    get isCurrentlyDelivering ():boolean {
      if (this.order !== undefined) { return this.order.status === EOrderState.ORDER_IN_PROGRESS }
      return false
    }

}
</script>

<style scoped>

</style>
