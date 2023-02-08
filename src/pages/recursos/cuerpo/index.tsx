import Head from 'next/head'

import { useArticles } from '@/lib/hooks/useArticles'
import { Page, ReactNode } from '@/lib/types'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'
import { HeaderPage, PostsList } from '@/components/pages/recursos/common'
import { LoadArticles } from '@/components/pages/recursos/common/LoadArticles'
import { EmptyArticles } from '@/components/pages/recursos/common/EmptyArticles'

import cuerpoSrc from 'public/img/cuerpo.webp'

const { SEO } = PAGE_INFO

export const CuerpoPage: Page = () => {
  const { articles, articlesIsLoading } = useArticles('cuerpo')

  return (
    <>
      <Head>
        <title>{SEO.TITLE} - Cuerpo</title>
        <meta name='description' content='La Casa de mi Padre - Cuerpo' />
      </Head>

      <HeaderPage title='Cuerpo' img={cuerpoSrc} />

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

CuerpoPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default CuerpoPage
