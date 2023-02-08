import { useEffect, useState } from 'react'

import { IArticle } from '@/lib/types'
import { getArticleBySlug, getArticles, getArticlesByCategory } from '@/lib/utils/blog/getArticles'

export const useArticles = (category?: 'alma' | 'cuerpo' | 'espiritu', slug?: string | string[]) => {
  const [articleBySlug, setArticleBySlug] = useState<IArticle>(null)
  const [articles, setArticles] = useState<IArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      const data = !category ? await getArticles() : await getArticlesByCategory(category)
      setIsLoading(false)

      if (!data) setError('Hubo un error en los Eventos')
      else setArticles(data)
    })()
  }, [category])

  useEffect(() => {
    (async () => {
      if (slug) {
        const data = await getArticleBySlug(slug)

        if (!data) setError('Hubo un error en los Eventos')

        else {
          setArticleBySlug(data)
          setIsLoading(false)
        }
      }
    })()
  }, [slug])

  return {
    articles,
    articleBySlug,
    articlesIsLoading: isLoading,
    articlesError: error
  }
}
