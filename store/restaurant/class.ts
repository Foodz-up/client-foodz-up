import { ETypeRestaurant, IArticle, IMenu, IRestaurant } from '~/store/interfaces'

export class Restaurant implements IRestaurant {
  constructor () {
    this.id = 0
    this.name = ''
    this.type = ETypeRestaurant.GASTRO
    this.menus = []
    this.articles = []
    this.timetable = {
      lundi: { mStart: '11:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      mardi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      mercredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      jeudi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      vendredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      samedi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      dimanche: { mStart: '12:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' }
    }
    this.picture = 'noshop.jpg'
    this.address = ''
    this.editor = []
    this.note = 0
    this.waiting = 10
  }

  id: number
  name: string
  note: number
  waiting: number
  type: ETypeRestaurant
  menus: IMenu[]
  articles: IArticle[]
  timetable: {
    lundi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    mardi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    mercredi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    jeudi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    vendredi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    samedi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    dimanche: { mStart: string; mEnd: string; aStart: string; aEnd: string };
  }

  picture: string
  address: string
  editor: string[]
}
