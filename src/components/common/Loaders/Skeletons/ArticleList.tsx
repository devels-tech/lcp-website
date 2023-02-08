import { ArticleSkeleton } from './Article'

export const ArticleSkeletonList = () => {
  return (
    <div className='w-full flex justify-center items-center flex-wrap max-w-2xl mx-auto'>
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
    </div>
  )
}
