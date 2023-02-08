import { IArticle } from '.'

export interface IHomeProps {
  articles: IArticle[]
  sliderItems: {
    topicOfTheMonth: { mobile: string[], desktop: string[] },
    events: { mobile: string[], desktop: string[] }
  }
}
