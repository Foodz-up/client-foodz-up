import { IArticle } from '~/store/interfaces'

export interface IMenu {
    id: number
    name: string
    description?: string
    articles: Array<IArticle>
    price: number
}
