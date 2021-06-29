<template>
  <div>
    <div class="flex items-center mb-4">
      <p class="mr-4">
        <span class="font-medium text-lg">Prix de la commande :</span> {{ orderPrice }} €
      </p>
      <ButtonFoodzUp v-if="!emptyItemsInCart" :title="'Vider le panier'" class="bg-red-pastel hover:bg-red-pastel-80 text-white" @buttonClicked="clearCart()" />
      <ButtonFoodzUp v-if="!emptyItemsInCart" :title="'Passer la commande'" class="bg-primary hover:bg-primary-80 text-white" @buttonClicked="toggleModal()" />
    </div>

    <div class="grid gap-7 gap-y-12 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
      <CardItem
        v-for="item in itemsInCart"
        :key="item.id"
        :item="item.item"
        :restaurant-id="item.restaurantId"
        :add-to-cart-button="false"
        :remove-from-cart="true"
        class="pb-5 sm:border-none sm:pb-0 mb-3"
        @removeItemFromCart="removeItemFromCart(item.id)"
      />
    </div>

    <Modal v-if="modal" :delete-button="false" @save="submitOrder()" @cancel="toggleModal()">
      <FormOrderPayment :card="card" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CartStore from '~/store/cart'
import { ICart, EOrderState, IArticle, IMenu, IRestaurant } from '~/store/interfaces'
import CardItem from '~/components/Cards/CardItem.vue'
import FormOrderPayment from '~/components/Forms/FormOrderPayment.vue'
import Modal from '~/components/Others/Modal.vue'
import NotificationStore from '~/store/notification'
import RestaurantStore from '~/store/restaurant'
import OrderStore from '~/store/order'
import AuthStore from '~/store/auth'

@Component({
  components: { CardItem, Modal, FormOrderPayment }
})
export default class Home extends Vue {
  modal: boolean = false;

  card: {
    cardNumber: string;
    expDate: string;
    cvv: string;
  } = {
    cardNumber: '1234 5678 9123 456',
    expDate: '09/23',
    cvv: '789'
  };

  realCard: {
    cardNumber: string;
    expDate: string;
    cvv: string;
  } = {
    cardNumber: '1234 5678 9123 456',
    expDate: '09/23',
    cvv: '789'
  }

  get itemsInCart ():Array<ICart> {
    return CartStore.items
  }

  get emptyItemsInCart ():boolean {
    return this.itemsInCart.length === 0
  }

  get itemsArticleAndMenuFromCart (): Array<IArticle | IMenu | null | undefined> {
    return this.itemsInCart.map((itemCart) => { return itemCart.item })
  }

  getRestaurant (): IRestaurant | undefined {
    return RestaurantStore.getRestaurant(this.itemsInCart[0].restaurantId)
  }

  clearCart () {
    CartStore.setCart([])
  }

  removeItemFromCart (id: number) {
    CartStore.removeItemsFromCart(id)
  }

  toggleModal () {
    this.modal = !this.modal
  }

  submitOrder () {
    const isEqual = (...objects) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]))

    if (isEqual(this.card, this.realCard)) {
      OrderStore.addOrder({
        id: OrderStore.orders.length,
        price: this.orderPrice,
        items: this.itemsArticleAndMenuFromCart,
        status: EOrderState.ORDERED,
        driver: null,
        restaurant: this.getRestaurant(),
        client: AuthStore.user,
        // TODO: change to date
        date: Date.now()
      })

      console.log({ or: OrderStore.orders })

      CartStore.setCart([])

      NotificationStore.addNotification({
        message: 'La commande a été réalisée',
        status: 200
      })
    } else {
      NotificationStore.addNotification({
        message: 'Les informations de la carte bancaire ne sont pas valides',
        status: 404
      })
    }
  }

  get orderPrice ():number {
    return this.itemsInCart.reduce((accumulator, item) => accumulator + item.item.price, 0)
  }
}
</script>

<style>

</style>
