<template>
  <div v-if="order" class="p-4">
    <h1 class="mt-4 mb-10 text-4xl text-start">
      <span class="font-semibold">{{ order.status }}</span> : Commande du {{ dateFormat(order.date) }}
    </h1>
    <LoadStatusOrder :status="order.status" />

    <div class="flex flex-col align-start p-6 bg-gray-50">
      <h1 class="text-2xl border-b-2 pb-5 border-black">
        #ref:{{ order._id }}
      </h1>
      <p class="text-sm font-thin mb-5 mt-2">
        Commandé le  {{ dateFormat(order.date) }}
      </p>
      <div class="mb-5">
        <h2 class="text-xl pb-3">
          Adresse
        </h2>
        <p class="text-sm font-thin">
          <span class="font-medium">Restaurant :</span> {{ order.restaurant.address }}
        </p>
        <p class="text-sm font-thin">
          <span class="font-medium">Client :</span> {{ order.client.address }}
        </p>
      </div>
      <h2 class="text-xl pb-3">
        Liste d'articles
      </h2>
      <div class="grid gap-4 grid-cols-1">
        <ul>
          <li v-for="item in order.items" :key="item.id" class="grid gap-5 grid-cols-2">
            <p class="text-sm">
              {{ item.name }}
            </p>
            <p class="text-sm font-thin">
              {{ item.price }} €
            </p>
          </li>
        </ul>

        <div class="pt-2 grid gap-5 grid-cols-2 border-t-2">
          <p class="text-sm">
            Total de la commande
          </p>
          <p class="text-sm font-thin">
            {{ order.price }} €
          </p>
        </div>
      </div>
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
    order: IOrder | undefined = OrderStore.getOrder(this.$router.currentRoute.params.id)

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
