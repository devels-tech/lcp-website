export const BulletList = ({
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
    <line className="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line>
    <line className="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line>
    <line className="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line>
    <line className="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line>
    <line className="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line>
    <line className="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line>
  </svg>
)
