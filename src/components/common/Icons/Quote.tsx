export const Quote = ({
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
    <rect className="ql-fill ql-stroke" height="3" width="3" x="4" y="5"></rect>
    <rect className="ql-fill ql-stroke" height="3" width="3" x="11" y="5"></rect>
    <path className="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"></path>
    <path className="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"></path>
  </svg>
)
