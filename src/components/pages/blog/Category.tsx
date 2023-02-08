import Link from 'next/link'
import { TCategoryNormalized } from '@/lib/types/posts'

export const Category = ({ category }: { category: TCategoryNormalized }) => {
  if (category.title === 'proximamente') {
    return (
      <li
        className='px-10 w-72 h-72 tabletmin:w-80 tabletmin:h-104 flex flex-wrap justify-center items-center rounded-xl'
        style={{
          background: `repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(102, 102, 102, 0.01) 0%, rgba(102, 102, 102, 0.01) 100%), no-repeat padding-box border-box 36% 57%/cover scroll url(${category.image})`
        }}
      >
        <h3 className='text-3xl font-bold text-white capitalize select-none'>{category.title}</h3>
      </li>
    )
  }

  return (
    <Link href={`/blog/${category.title}`} className='my-5 tabletmin:mx-5'>
      <li
        className='px-10 w-72 h-72 tabletmin:w-80 tabletmin:h-104 flex flex-wrap justify-center items-center rounded-xl bg-center bg-cover bg-no-repeat hover:bg-left hover:opacity-80 transition-all'
        style={{
          backgroundImage: `url(${category.image})`
        }}
      >
        <h3 className='text-3xl font-bold text-white capitalize select-none'>{category.title}</h3>
      </li>
    </Link>
  )
}
