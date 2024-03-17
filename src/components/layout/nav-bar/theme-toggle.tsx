'use client'

import { useEffect, useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function ThemeToggle () {
  const [comboxWidth, setComboxWidth] = useState(null)
  const { setTheme, theme } = useTheme()
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    // Crea una instancia de ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width
      setComboxWidth(width)
    })

    // Observa el elemento
    resizeObserver.observe(element)

    // Limpia la instancia de ResizeObserver cuando el componente se desmonta
    return () => {
      resizeObserver.unobserve(element)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='w-full justify-start items-center px-4 mt-2' variant='outline' size='icon' ref={elementRef}>
          {
            theme === 'light'
              ? (
                <>
                  <Sun className='mr-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                  Modo Claro
                </>
              )
              : (
                <>
                  <Moon className='mr-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                  Modo Oscuro
                </>
              )
          }

          <span className='sr-only'>Cambiar Tema</span>
        </Button>
      </DropdownMenuTrigger>

      <style>
        {`
          .dropdown-content {
            min-width: 150px !important;
            width: ${comboxWidth + 32}px !important;
          }
        `}
      </style>

      <DropdownMenuContent align='start' className='dropdown-content'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className='mr-2 h-[1.2rem] w-[1.2rem]' />
          Modo Claro
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className='mr-2 h-[1.2rem] w-[1.2rem]' />
          Modo Oscuro
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
