import { IArticle, IMenu, ICart, IRestaurant } from '~/store/interfaces'
import RestaurantStore from '~/store/restaurant'

export class Cart implements ICart {
  constructor () {
    this.id = 0
    this.item = null
    this.restaurant = RestaurantStore.restaurants[0]
  }

  restaurant: IRestaurant | undefined;
  id: number;
  item?: IArticle | IMenu | null;
}
