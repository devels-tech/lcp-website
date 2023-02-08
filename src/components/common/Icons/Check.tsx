import { TIconProps } from './types'
export const IconCheck = ({ classes = null, height = 24, width = 24, fill = 'none', stroke = 'none', handleClick, isActive = false }: TIconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill={fill} stroke={stroke} className={classes}>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
  </svg>
)
