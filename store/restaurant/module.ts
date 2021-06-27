import { RestaurantState } from '~/store/restaurant/state'
import { IRestaurant } from '~/store/interfaces'

export const RestaurantStoreModule = {
  namespaced: false,
  state: () => ({ ...new RestaurantState() }),
  getters: {
    restaurants (state: RestaurantState): Array<IRestaurant> {
      return state.restaurants
    }
  },
  mutations: {
    setRestaurants (state: RestaurantState, restaurants: Array<IRestaurant>) {
      state.restaurants = restaurants
    },
    addRestaurant (state: RestaurantState, restaurant: IRestaurant) {
      state.restaurants = [...state.restaurants, restaurant]
    },
    addRestaurants (state: RestaurantState, restaurants: Array<IRestaurant>) {
      state.restaurants = [...state.restaurants, ...restaurants]
    }
  }
}
