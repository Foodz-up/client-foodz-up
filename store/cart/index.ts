import BaseStoreService from '~/store/abstract'
import { CartStoreModule } from '~/store/cart/module'
import { CartState } from '~/store/cart/state'
import { ICart, IMenu, IArticle } from '~/store/interfaces/'

class CartStore extends BaseStoreService<CartState> {
  public mutations = CartStoreModule.mutations
  public getters = CartStoreModule.getters

  get items (): Array<ICart> {
    return this.read<any>(this.getters.items)
  }

  setCart (items: Array<ICart>) {
    this.commit(this.mutations.setCart, items)
  }

  addItemsToCart (quantity: number, item: IMenu | IArticle, restaurantId: number) {
    this.commit(this.mutations.addItemsToCart, { quantity, item, restaurantId })
  }
}
export default new CartStore()
