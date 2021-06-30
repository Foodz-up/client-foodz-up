import BaseStoreService from '~/store/abstract'
import { OrderStoreModule } from '~/store/order/module'
import { OrderState } from '~/store/order/state'
import { IOrder } from '~/store/interfaces/'
import axios from '~/plugins/axios'
import NotificationStore from '~/store/notification'

class OrderStore extends BaseStoreService<OrderState> {
  public mutations = OrderStoreModule.mutations
  public getters = OrderStoreModule.getters

  get orders (): Array<IOrder> {
    return this.read<any>(this.getters.orders)
  }

  getOrder (idOrder: number): IOrder | undefined {
    return this.orders.find(order => order.id === idOrder)
  }

  async getOrders () {
    try {
      const orders = await axios().get('/orders/me')

      if (orders.status === 200) {
        if (orders.data.orders.length > 0) {
          this.addOrders(orders.data.orders)
        }
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  setOrders (orders: Array<IOrder>) {
    this.commit(this.mutations.setOrders, orders)
  }

  async addOrder (order: IOrder) {
    try {
      let newId = 0
      if (this.orders.length > 0) {
        newId = this.orders[this.orders.length - 1].id + 1
      }
      order.id = newId
      const newOrder = await axios().post('/orders/me', order)
      if (newOrder.status === 200) {
        this.commit(this.mutations.addOrder, newOrder.data.order)
        NotificationStore.addNotification({ message: newOrder.data.message, status: newOrder.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  addOrders (orders: Array<IOrder>) {
    const existing = this.checkIfOrdersAlreadyExist(orders)
    if (!existing) {
      this.commit(this.mutations.addOrders, orders)
    }
  }

  checkIfOrdersAlreadyExist (orders: Array<IOrder>) {
    return this.orders.find(order => order.id === orders[0].id)
  }
}
export default new OrderStore()
