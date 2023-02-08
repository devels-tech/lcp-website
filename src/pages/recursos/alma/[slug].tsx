import { ArticleDetailLayout } from '@/layouts/ArticleDetail'
import { ReactNode } from '@/lib/types'

import MainLayout from '@/layouts/Main'
import { ArticleNotFounded } from '@/components/pages/recursos/common/ArticleNotFounded'
import { Spinner } from '@/components/common/Loaders'
import { useRouter } from 'next/router'
import { useArticles } from '@/lib/hooks/useArticles'

export const AlmaArticleDetail = () => {
  const router = useRouter()
  const { articleBySlug, articlesIsLoading } = useArticles('alma', router.query.slug)

  if (articlesIsLoading) return <Spinner />

  if (!articleBySlug) return <ArticleNotFounded />

  return (
    <ArticleDetailLayout
      image={articleBySlug.imageSrc}
      tag={articleBySlug.tag}
      title={articleBySlug.title}
      author={articleBySlug.authorName || 'Desconocido'}
      publishied={articleBySlug.date}
      authorProfesion={articleBySlug.authorProfesion}
    >
      {articleBySlug && articleBySlug.content}
    </ArticleDetailLayout>
  )
}

AlmaArticleDetail.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default AlmaArticleDetail
