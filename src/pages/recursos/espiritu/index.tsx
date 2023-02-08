import Head from 'next/head'

import { Page, ReactNode } from '@/lib/types'
import { useArticles } from '@/lib/hooks/useArticles'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'
import { HeaderPage, PostsList } from '@/components/pages/recursos/common'
import { LoadArticles } from '@/components/pages/recursos/common/LoadArticles'
import { EmptyArticles } from '@/components/pages/recursos/common/EmptyArticles'

import espirituSrc from 'public/img/espiritu.webp'

const { SEO } = PAGE_INFO

export const EspirituPage: Page = () => {
  const { articles, articlesIsLoading } = useArticles('espiritu')

  return (
    <>
      <Head>
        <title>{SEO.TITLE} - Espíritu</title>
        <meta name='description' content='La Casa de mi Padre - Espíritu' />
      </Head>

      <HeaderPage title='Espíritu' img={espirituSrc} />

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

EspirituPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default EspirituPage
