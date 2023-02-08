import { TIconProps } from './types'
export const IconInfo = ({ classes = null, height = 24, width = 24, fill = 'none', stroke = 'none', handleClick, isActive = false }: TIconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill={fill} stroke={stroke} className={classes}>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
  </svg>
)
