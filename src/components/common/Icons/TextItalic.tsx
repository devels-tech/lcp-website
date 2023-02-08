export const TextItalic = ({
  width = null,
  height = null,
  fill = 'none',
  stroke = '#111',
  classes = 'w-6 h-6'
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
    className={classes}
  >
    <line className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>
    <line className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>
    <line className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>
  </svg>
)
