import { IIconsBasicProps } from './types'

export const IconBurger = ({ classes, onClick }: IIconsBasicProps) => (
  <svg
    className={`w-7 h-7 fill-zinc-900 hover:fill-zinc-700 stroke-primary-500 ${classes}`}
    fill='currentColor'
    onClick={onClick}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 12H21'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 6H21'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 18H21'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
