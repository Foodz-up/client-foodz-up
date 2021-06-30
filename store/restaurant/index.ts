// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { RestaurantStoreModule } from '~/store/restaurant/module'
import { RestaurantState } from '~/store/restaurant/state'
import { IRestaurant } from '~/store/interfaces/'
import axios from '~/plugins/axios'
import NotificationStore from '~/store/notification'

class RestaurantStore extends BaseStoreService<RestaurantState> {
  public mutations = RestaurantStoreModule.mutations
  public getters = RestaurantStoreModule.getters

  get restaurants (): Array<IRestaurant | undefined > {
    return this.read<any>(this.getters.restaurants)
  }

  async getRestaurants () {
    try {
      const restaurant = await axios().get('/restaurants')
      if (restaurant.status === 200) {
        if (restaurant.data.restaurants.length > 0) {
          this.setRestaurants(restaurant.data.restaurants)
        }
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  setRestaurants (restaurants: Array<IRestaurant>) {
    this.commit(this.mutations.setRestaurants, restaurants)
  }

  getRestaurant (_idRestaurant: string): IRestaurant | undefined {
    return this.restaurants.find(restaurant => restaurant._id === _idRestaurant)
  }

  getMenuFromRestaurant(idMenu: number, idRestaurant: string) {
    const restaurant = this.restaurants.find(restaurant => restaurant._id === idRestaurant)
    return restaurant?.menus?.find(menu => menu.id === idMenu)
  }
}
export default new RestaurantStore()
