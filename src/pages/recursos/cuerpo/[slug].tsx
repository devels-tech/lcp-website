import { useRouter } from 'next/router'

import { ReactNode } from '@/lib/types'
import { useArticles } from '@/lib/hooks/useArticles'

import MainLayout from '@/layouts/Main'
import { ArticleDetailLayout } from '@/layouts/ArticleDetail'
import { Spinner } from '@/components/common/Loaders'
import { ArticleNotFounded } from '@/components/pages/recursos/common/ArticleNotFounded'

export const CuerpoArticleDetail = () => {
  const router = useRouter()
  const { articleBySlug, articlesIsLoading } = useArticles('cuerpo', router.query.slug)

  if (articlesIsLoading) return <Spinner />

  if (!articleBySlug) return <ArticleNotFounded />

  return (
    <ArticleDetailLayout
      image={articleBySlug.imageSrc}
      tag={articleBySlug.tag}
      title={articleBySlug.title}
      author={articleBySlug.authorName || 'Desconocido'}
      authorProfesion={articleBySlug.authorProfesion}
      publishied={articleBySlug.date}
    >
      {articleBySlug && articleBySlug.content}
    </ArticleDetailLayout>
  )
}

CuerpoArticleDetail.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default CuerpoArticleDetail
