<template>
  <div class="p-4">
    <h1 class="mt-4 text-4xl text-center">
      Commande du {{ dateFormat(order.date) }}
    </h1>
    <hr class="my-4">
    <LoadStatusOrder :status="order.status" />

    <GMap
      v-if="isCurrentlyDelivering"
      ref="gMap"
      class="mt-12"
      language="en"
      :cluster="{options: {styles: clusterStyle}}"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
      :options="{fullscreenControl: false, styles: mapStyle}"
      :zoom="6"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{lat: location.lat, lng: location.lng}"
        :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{maxWidth: 200}">
          <code>
            lat: {{ location.lat }},
            lng: {{ location.lng }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
      <GMapCircle :options="circleOptions" />
    </GMap>

    <h2 class="text-2xl mt-8">
      Rappel de votre commande :
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListOrders from '~/components/Lists/ListOrders.vue'
import LoadStatusOrder from '~/components/Others/LoadStatusOrder.vue'

@Component({
  components: { ListOrders, LoadStatusOrder }
})
export default class Orders extends Vue {
    // TODO: need type
    order: { id: number, restaurantName: string, price: number, status: string, date: number, itemsNumber: number, restaurantID: number } = {
      id: 1, restaurantName: 'McDonald', price: 18.00, status: 'En cours de livraison', date: Date.now(), itemsNumber: 3, restaurantID: 2
    }

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
      return this.order.status === 'En cours de livraison'
    }
}
</script>

<style scoped>

</style>
