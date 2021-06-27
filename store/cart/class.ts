import { IArticle, IMenu, ICart } from '~/store/interfaces'

export class Cart implements ICart {
  constructor () {
    this.id = 0
    this.item = null
    this.restaurantId = 0
  }

  id: number;
  item?: IArticle | IMenu | null;
  restaurantId: number;
}
