import Head from 'next/head'
import Image from 'next/image'

import { PAGE_INFO } from '@/config'

const { SEO } = PAGE_INFO

interface IArticleDetailProps {
  children: string
  title: string
  image: string
  tag: string
  author: string
  authorProfesion: string
  publishied: string
}

export const ArticleDetailLayout = ({ children, title, image, tag, author, publishied, authorProfesion }: IArticleDetailProps) => {
  return (
    <>
      <Head>
        <title>{SEO.TITLE} - {title}</title>
      </Head>

      <div className='min-h-screen w-full px-4 pt-20 pb-4'>
        <div className='w-full h-full max-w-7xl mx-auto'>
          <article className='mt-4'>
            <section className='w-full mx-auto'>
              <Image
                src={image}
                alt={title}
                className='w-full h-full object-cover block rounded-sm'
                width={1920}
                height={1080}
              />
            </section>
            <br />

            <section className='mx-auto mt-6 max-w-5xl'>
              {/* <span className='uppercase text-primary-500'>{`${tag} | ${formatterDate(publishied)}`}</span> */}
              <span className='uppercase text-primary-500'>{`${tag} | ${publishied}`}</span>
              <br />
              <br />

              <h2 className='text-2xl font-black text-primary-500 mb-3 xl:text-6xl'>{title}</h2>
              <br />
              <p className='text-xl text-secondary-500 font-bold'>{author}.</p>
              <span className='text-lg font-medium text-secondary-500'> {/* Esto se cambia si o si xd */}
                {authorProfesion}
                {/* {
                  (author === 'Thais Rodríguez' && 'Psicóloga Clínica y Psicoterapeuta.')
                  || (author === 'Yadmile Godoy' && 'Licenciada en Nutrición y Dietética.')
                } */}
              </span>
              <br />

              <main
                className='styledMarkdown'
                dangerouslySetInnerHTML={{ __html: children }}
              />
            </section>
          </article>
        </div>
      </div>
    </>
  )
}
