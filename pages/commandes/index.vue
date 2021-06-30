<template>
  <div>
    <h1 class="mt-1 text-4xl font-medium">
      Vos commandes
    </h1>

    <hr class="mt-4 mb-8">
    <div v-if="storeOrders">
      <ListOrders :orders="storeOrders" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListOrders from '~/components/Lists/ListOrders.vue'
import { ETypeRestaurant, EOrderState, IOrder } from '~/store/interfaces'
import OrderStore from '~/store/order'
import AuthStore from '~/store/auth'

@Component({
  components: { ListOrders }
})
export default class Orders extends Vue {
  mounted () {
    OrderStore.getOrders()
  }

  get storeOrders ():Array<IOrder> {
    return OrderStore.orders
  }
}
</script>

<style scoped>

</style>
