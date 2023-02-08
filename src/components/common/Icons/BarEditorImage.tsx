export const BarEditorImage = ({
  classes = 'w-6 h-6'
}) => (
  <svg
    viewBox="0 0 18 18"
    xmlns='http://www.w3.org/2000/svg'
    className={classes}
  >
    <rect className="ql-stroke" height="10" width="12" x="3" y="4"></rect>
    <circle className="ql-fill" cx="6" cy="7" r="1"></circle>
    <polyline className="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>
  </svg>
)
