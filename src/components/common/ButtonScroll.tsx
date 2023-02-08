import { useEffect, useState } from 'react'
import { IconArrowMiddleDown } from '@/components/common/Icons'

export const ButtonScroll = ({ classes = '' }) => {
  const [isMounted, setIsMounted] = useState(false)

  const handleClickScroll = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
    ? (
      <button
        className={`absolute z-10 buttonScroll ${classes}`}
        style={{ bottom: '5%', right: '5%' }}
        onClick={handleClickScroll}
      >
        <IconArrowMiddleDown stroke='#fff' width={40} height={40} />
      </button>
    )
    : null
}
