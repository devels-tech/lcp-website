import { Category } from './Category'
import { TCategoriesNormalized } from '@/lib/types/posts'

export const CategoryList = ({ categories }: { categories: TCategoriesNormalized }) => {
  return (
    <section className='w-full h-full'>
      <ul className='flex flex-col justify-center items-center tabletmin:flex-row flex-wrap w-full h-full'>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ul>
    </section>
  )
}
