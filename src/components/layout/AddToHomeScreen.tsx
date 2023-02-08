import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Button } from '@/components/common/Button'

import { useAddToHomescreenPrompt } from '@/lib/hooks/useAddToHomeScreen'

export const AddToHomeScreen = () => {
  const { prompt, promptToInstall } = useAddToHomescreenPrompt()
  const [isVisible, setVisibleState] = useState(false)

  const hide = () => setVisibleState(false)
  // const show = () => setVisibleState(true)

  useEffect(() => {
    const isNewUser = Cookies.get('isNewUser')

    if (prompt) {
      if (!isNewUser) {
        setVisibleState(true)
        Cookies.set('isNewUser', 'false')
      }
    }
  }, [prompt])

  if (!isVisible) {
    return <></>
  }

  return (
    <div className='w-full h-min fixed z-70 bottom-0 right-0 text-center p-4 lg:hidden' style={{ backgroundColor: '#0000008c' }}>
      <span className='text-white'>¿Deseas instalar nuestra <br /> pagina en tu telefono?</span>
      <br />

      <section className='flex justify-between items-center mx-auto mt-3' style={{ maxWidth: '290px' }}>
        <div>
          <Button onClick={hide}>Cancelar</Button>
        </div>

        <div onClick={hide}>
          <Button onClick={promptToInstall}>Instalar</Button>
        </div>
      </section>
    </div>
  )
}
