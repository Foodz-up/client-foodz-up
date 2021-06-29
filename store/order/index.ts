import BaseStoreService from '~/store/abstract'
import { OrderStoreModule } from '~/store/order/module'
import { OrderState } from '~/store/order/state'
import { IOrder } from '~/store/interfaces/'

class OrderStore extends BaseStoreService<OrderState> {
  public mutations = OrderStoreModule.mutations
  public getters = OrderStoreModule.getters

  get orders (): Array<IOrder> {
    return this.read<any>(this.getters.orders)
  }

  getOrder (idOrder: number): IOrder | undefined {
    return this.orders.find(order => order.id === idOrder)
  }

  setOrders (orders: Array<IOrder>) {
    this.commit(this.mutations.setOrders, orders)
  }

  addOrder (order: IOrder) {
    this.commit(this.mutations.addOrder, order)
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
