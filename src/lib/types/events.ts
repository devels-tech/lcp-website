export interface TEvent {
  date: string
  imageRef: string
  redirectLabel: string
  redirectTo: string
  schedule: string
  title: string
  id: string
  imgSrc: string
  description: string
}

export interface IFirebaseEvent {
  date: string
  description: string
  imageRef: string
  redirectLabel: string
  redirectTo: string
  schedule: string
  title: string
}

export type TEvents = TEvent[]
