import BaseStoreService from '~/store/abstract'
import { CartStoreModule } from '~/store/cart/module'
import { CartState } from '~/store/cart/state'
import { ICart, IMenu, IArticle, IRestaurant } from '~/store/interfaces/'
import NotificationStore from '~/store/notification'

class CartStore extends BaseStoreService<CartState> {
  public mutations = CartStoreModule.mutations
  public getters = CartStoreModule.getters

  get items (): Array<ICart> {
    return this.read<any>(this.getters.items)
  }

  setCart (items: Array<ICart>) {
    this.commit(this.mutations.setCart, items)
    NotificationStore.addNotification({
      message: 'Votre panier à bien été vidé',
      status: 200
    })
  }

  addItemsToCart (quantity: number, item: IMenu | IArticle, restaurant: IRestaurant) {
    this.commit(this.mutations.addItemsToCart, { quantity, item, restaurant })
    NotificationStore.addNotification({
      message: 'Votre articles à bien été ajouté',
      status: 200
    })
  }

  removeItemsFromCart (idItem: number) {
    this.commit(this.mutations.removeItemsFromCart, idItem)
    NotificationStore.addNotification({
      message: 'Votre articles à bien été supprimé',
      status: 200
    })
  }
}
export default new CartStore()
