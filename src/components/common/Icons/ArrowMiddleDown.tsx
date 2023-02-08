export const IconArrowMiddleDown = ({
  classes = null,
  height = 34,
  width = 34,
  fill = 'none',
  stroke = '#111'
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
