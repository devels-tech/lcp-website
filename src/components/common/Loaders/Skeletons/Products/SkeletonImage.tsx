import Skeleton from 'react-loading-skeleton'

// Skeleton Aspect Ratio 1:1
export const SkeletonImage = ({ classes = '' }) => {
  return (
    <Skeleton
      style={{ width: '100%', height: '0', paddingTop: '100%' }}
      className={classes}
    />
  )
}
