import { IMenu, IArticle } from '~/store/interfaces'

export interface ICart {
    id: number
    item?: IArticle | IMenu | null
    restaurantId: number
}
