import Image from 'next/image'
import Link from 'next/link'

export const Article = ({ article }) => {
  return (
    <article
      className='h-fit my-6 text-left lg:m-4'
      style={{ maxWidth: '350px' }}
      key={article.id}
    >
      <Link href={`/recursos/${article.category}/${article.slug}`}>
        <picture className='nextImg__span--w-full'>
          <Image
            src={article.imageSrc}
            width={300}
            height={200}
            className='w-full rounded-sm'
            objectFit='cover'
            alt={article.title}
          />
        </picture>
      </Link>

      <div className='mt-3 text-primary-500 font-medium text-sm uppercase'>
        <span>{article.tag}</span> |&nbsp;
        <time dateTime={article.date}>{article.date}</time>
      </div>

      <Link href={`/recursos/${article.category}/${article.slug}`}>
        <h3 className='text-lg w-66 ml:w-76 mt-2 font-medium text-secondary-500 truncate'>{article.title}</h3>
      </Link>
      <p className='article__description'>{article.description}</p>
    </article>
  )
}
