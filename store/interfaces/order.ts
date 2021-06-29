import { IMenu, IArticle, IUser, IRestaurant } from '~/store/interfaces'

export enum EOrderState {
    ORDERED = 'Commandée',
    ORDER_IN_PROGRESS = 'Commande en préparation',
    ORDER_READY = 'Commande préparée',
    DELIVERING = 'En cours de livraison',
    DELIVERED = 'Livrée',
    PASSED = 'Passée'
}

export interface IOrder {
    id: number
    price: number
    items: Array<IArticle | IMenu | null | undefined>
    status: EOrderState
    driver: IUser | null
    restaurant: IRestaurant | undefined
    client: IUser
    // TODO: change to date
    date: number
}
