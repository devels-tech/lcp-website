import { IIconsBasicProps } from './types'

export const IconCancel = ({ classes, onClick }: IIconsBasicProps) => (
  <svg
    className={`w-7 h-7 fill-zinc-900 hover:fill-zinc-700 stroke-white ${classes}`}
    fill='currentColor'
    onClick={onClick}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18 6L6 18'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 6L18 18'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
