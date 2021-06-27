import { CartState } from '~/store/cart/state'
import { IArticle, ICart, IMenu } from '~/store/interfaces'

export const CartStoreModule = {
  namespaced: false,
  state: () => ({ ...new CartState() }),
  getters: {
    items (state: CartState): Array<ICart> {
      return state.items
    }
  },
  mutations: {
    setCart (state: CartState, items: Array<ICart>) {
      state.items = items
    },
    addItemsToCart (state: CartState, payload: { quantity: number, item: IMenu | IArticle, restaurantId: number}) {
      let items: Array<ICart> = []
      let id = 0
      if (state.items[0]) {
        id = state.items.length
      }

      for (let index = id; index < id + payload.quantity; index++) {
        items = [...items, { id: index, item: payload.item, restaurantId: payload.restaurantId }]
      }
      state.items = [...state.items, ...items]
    }
  }
}
