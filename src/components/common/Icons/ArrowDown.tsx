import { TIconProps } from './types'

export const IconArrowDown = ({
  classes = null,
  height = 34,
  width = 34,
  fill = 'white',
  stroke = 'none'
}: TIconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 48 48' stroke={stroke} className={classes}>
      <path fill={fill} d='M14 20l10 10 10-10z' />
      <path d='M0 0h48v48h-48z' fill='none' />
    </svg>
  )
}
