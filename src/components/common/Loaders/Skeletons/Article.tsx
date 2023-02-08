import Skeleton from 'react-loading-skeleton'

export const ArticleSkeleton = () => {
  return (
    <div className='articleSkeletonWrapper'>
      <Skeleton height={200} />
      <Skeleton />
      <Skeleton count={3} />
    </div>
  )
}
