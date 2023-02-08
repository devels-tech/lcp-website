import Head from 'next/head'

import { Page, ReactNode } from '@/lib/types'
import { useArticles } from '@/lib/hooks/useArticles'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'
import { HeaderPage, PostsList } from '@/components/pages/recursos/common'
import { LoadArticles } from '@/components/pages/recursos/common/LoadArticles'
import { EmptyArticles } from '@/components/pages/recursos/common/EmptyArticles'

import almaSrc from 'public/img/alma.webp'

const { SEO } = PAGE_INFO

export const AlmaPage: Page = () => {
  const { articles, articlesIsLoading } = useArticles('alma')

  return (
    <>
      <Head>
        <title>{SEO.TITLE} - Alma</title>
        <meta name='description' content='La Casa de mi Padre - Alma' />
      </Head>

      <HeaderPage title='Alma' img={almaSrc} />

      {
        articlesIsLoading
          ? <LoadArticles />
          : articles.length !== 0

            ? <PostsList articles={articles} />
            : <EmptyArticles />
      }
    </>
  )
}

AlmaPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default AlmaPage
