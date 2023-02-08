import type { ReactNode, CSSProperties } from 'react'

type ButtonProps = {
  children?: ReactNode
  onClick?: (params: any) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  style?: CSSProperties
  tabIndex?: number
  classes?: string
}

export const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  type = 'button',
  classes = '',
  style,
  tabIndex
}: ButtonProps) => (
  <button
    disabled={disabled}
    tabIndex={tabIndex}
    type={type}
    className={
      `bg-secondary-500 filter hover:brightness-125 focus:brightness-125 text-white py-1 px-10 rounded-3xl min-w-176px font-bold xl:text-lg 4xl:text-xl xl:px-11 disabled:opacity-50 disabled:cursor-not-allowed ${classes}`
    }
    onClick={onClick}
    style={style}
  >
    {children || 'BUTTON DEFAULT'}
  </button>
)
