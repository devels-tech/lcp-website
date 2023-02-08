import Skeleton from 'react-loading-skeleton'

export const ArticleSkeletonPageDetail = () => {
  return (
    <div className='w-76 h-80 my-4 text-xl sm:mx-7'>
      <Skeleton height={450} />

      <div style={{ marginTop: '1rem', maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Skeleton width={400} height={30} />
        <Skeleton style={{ maxWidth: '800px' }} count={7} />
      </div>
    </div>
  )
}
