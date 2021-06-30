import { CartState } from '~/store/cart/state'
import { IArticle, ICart, IMenu, IRestaurant } from '~/store/interfaces'

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
    addItemsToCart (state: CartState, payload: { quantity: number, item: IMenu | IArticle, restaurant: IRestaurant}) {
      let items: Array<ICart> = []
      let id = 0
      if (state.items[0]) {
        id = state.items.length
      }

      for (let index = id; index < id + payload.quantity; index++) {
        items = [...items, { id: index, item: payload.item, restaurant: payload.restaurant }]
      }
      state.items = [...state.items, ...items]
    },
    removeItemsFromCart (state: CartState, idItem:number) {
      const indexItem = state.items.findIndex(item => item.id === idItem)
      state.items.splice(indexItem, 1)
    }
  }
}
