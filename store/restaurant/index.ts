// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { RestaurantStoreModule } from '~/store/restaurant/module'
import { RestaurantState } from '~/store/restaurant/state'
import { IRestaurant } from '~/store/interfaces/'

class RestaurantStore extends BaseStoreService<RestaurantState> {
  public mutations = RestaurantStoreModule.mutations
  public getters = RestaurantStoreModule.getters

  get restaurants (): Array<IRestaurant> {
    return this.read<any>(this.getters.restaurants)
  }

  setRestaurants (restaurants: Array<IRestaurant>) {
    this.commit(this.mutations.setRestaurants, restaurants)
  }

  getRestaurant (idRestaurant: number) {
    return this.restaurants.find(restaurant => restaurant.id === idRestaurant)
  }

  getMenuFromRestaurant (idMenu: number, idRestaurant: number) {
    const restaurant = this.restaurants.find(restaurant => restaurant.id === idRestaurant)
    return restaurant?.menus?.find(menu => menu.id === idMenu)
  }
}
export default new RestaurantStore()
