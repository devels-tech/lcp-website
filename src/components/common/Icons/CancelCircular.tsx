export const CancelCircular = ({
  width = null,
  height = null,
  fill = 'none',
  stroke = '#111',
  classes = 'w-6 h-6'
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
    className={classes}
  >
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15 9L9 15'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 9L15 15'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
