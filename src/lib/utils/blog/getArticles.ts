import { getDownloadURL, ref } from 'firebase/storage'

import { getArticlesDB } from '@/lib/services/firebase/utils/getData'
import { storage } from '@/lib/services/firebase/client'
import { IArticle } from '@/lib/types/blog'
import { ARTICLES_DB_REF } from '@/lib/services/firebase/utils/refs'
import { getDocs, query, where } from 'firebase/firestore'

export const getArticles = async () => {
  const data = await getArticlesDB()

  const articlesPromises = data.docs.map(async (doc) => {
    const imageURL = await getDownloadURL(ref(storage, doc.data().imageRef))

    return JSON.parse(JSON.stringify({
      id: doc.id,
      imageSrc: imageURL,
      ...doc.data()
    }))
  })

  const articles: IArticle[] = await Promise.all(articlesPromises)
    .then(results => results)

  return articles
}

export const getArticlesByCategory = async (category: 'alma' | 'cuerpo' | 'espiritu') => {
  const queryArticles = query(
    ARTICLES_DB_REF,
    where('category', 'in',
      [category])
  )

  const snapshotArticles = await getDocs(queryArticles)

  const articlesPromises = snapshotArticles.docs.map(async (doc) => {
    const imageURL = await getDownloadURL(ref(storage, doc.data().imageRef))

    return JSON.parse(JSON.stringify({
      id: doc.id,
      imageSrc: imageURL,
      ...doc.data()
    }))
  })

  const articles: IArticle[] = await Promise.all(articlesPromises)
    .then(results => results)

  return articles
}

export const getArticleBySlug = async (slug: string | string[]) => {
  const queryArticles = query(
    ARTICLES_DB_REF,
    where('slug', 'in',
      [slug])
  )

  const snapshotArticles = await getDocs(queryArticles)

  if (!snapshotArticles.empty) {
    const articlesPromises = snapshotArticles.docs.map(async (doc) => {
      const imageURL = await getDownloadURL(ref(storage, doc.data().imageRef))

      return JSON.parse(JSON.stringify({
        id: doc.id,
        imageSrc: imageURL,
        ...doc.data()
      }))
    })

    const articles: IArticle[] = await Promise.all(articlesPromises)
      .then(results => results)

    return articles[0]
  } else {
    return null
  }
}
