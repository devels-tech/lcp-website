export const Paragraph = ({ classes = '', children }) => (
  <p className={`text-justify ${classes}`}>
    {children}
  </p>
)
