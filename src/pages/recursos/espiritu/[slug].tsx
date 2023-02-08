import { useRouter } from 'next/router'

import { ReactNode } from '@/lib/types'
import { useArticles } from '@/lib/hooks/useArticles'

import MainLayout from '@/layouts/Main'
import { ArticleDetailLayout } from '@/layouts/ArticleDetail'
import { ArticleNotFounded } from '@/components/pages/recursos/common/ArticleNotFounded'
import { Spinner } from '@/components/common/Loaders'

export const SpiritArticleDetail = () => {
  const router = useRouter()
  const { articleBySlug, articlesIsLoading } = useArticles('espiritu', router.query.slug)

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

SpiritArticleDetail.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default SpiritArticleDetail
