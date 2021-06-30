import { IMenu, IArticle, IRestaurant } from '~/store/interfaces'

export interface ICart {
    id: number
    item?: IArticle | IMenu | null
    restaurant: IRestaurant | undefined
}
