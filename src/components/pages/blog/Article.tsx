import Link from 'next/link'
import Image from 'next/image'
import { TArticleRes } from '@/lib/types/posts'

export const Article = ({ article }: { article: TArticleRes }) => {
  return (
    <article className='my-10 transform hover:-translate-y-2 transition-transform ease-in-out' key={article.id}>
      <section>
        <Link href={`/blog/articulo/${article.slug}`}>
          <Image
            src={article.imagen_principal.url}
            alt={article.titulo}
            width={article.imagen_principal.width}
            height={article.imagen_principal.height}
          />
        </Link>
      </section>

      <section className='mt-2 px-4 flex flex-row justify-between items-center h-8'>
        <picture className='w-12 h-12 bg-white rounded-full -mb-16 flex justify-center items-center'>
          <Image
            src={article.users_permissions_user?.avatar.url}
            width={article.users_permissions_user?.avatar.width}
            height={article.users_permissions_user?.avatar.height}
            alt='Foto de Perfil'
          />
        </picture>

        <span className='mt-5 text-lcpYellow-500 text-sm font-medium w-30 truncate'>
          {(article.users_permissions_user && article.users_permissions_user.username) || 'Desconocido'}
        </span>

        <span className='mt-5 bg-lcpBlue-200 opacity-90 px-2 py-1 rounded text-sm text-white select-none w-24 text-center truncate'>
          {article.etiqueta && article.etiqueta}
        </span>
      </section>

      <section className='mt-4 bg-white px-4 pb-4 pt-8 rounded-md'>
        <Link href={`/blog/articulo/${article.slug}`}>
          <h3 className='text-gray-700 font-semibold hover:text-lcpYellow-500'>{article.titulo}</h3>
        </Link>

        <p className='mt-4'>{article.descripccion}</p>

        <hr className='my-3' />

        <div>
          <Link href={`/blog/articulo/${article.slug}`} className='text-gray-500 font-semibold hover:text-lcpYellow-500'>
            Leer Mas
          </Link>
        </div>
      </section>
    </article>
  )
}
