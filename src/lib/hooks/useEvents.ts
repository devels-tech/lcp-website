import { TEvent } from '@/lib/types'
import { getEvents } from '@/lib/utils/events/getEvents'
import { useEffect, useState } from 'react'

export const useEvents = () => {
  const [events, setEvents] = useState<TEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      const data = await getEvents()
      setIsLoading(false)

      if (!data) setError('Hubo un error en los Eventos')
      else setEvents(data)
    })()
  }, [])

  return {
    events,
    eventsIsLoading: isLoading,
    eventsError: error
  }
}
