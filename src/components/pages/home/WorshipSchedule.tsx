import { useRef } from 'react'
import { Button } from '@/components/common/Button'
import { useRouter } from 'next/router'

export const WorshipSchedule = () => {
  const router = useRouter()
  const { current: schedules } = useRef([
    { label: 'Primer Servicio', hour: '9:00 a.m' },
    { label: 'Segundo Servicio', hour: '11:00 a.m' }
  ])

  return (
    <section
      style={{ background: 'linear-gradient(0deg, rgba(52,109,191, .9) 0%, rgba(30, 71, 141, 1) 100%)' }}
      className='w-full h-full py-8 px-3 text-center text-white'
    >
      <span
        className='text-2xl font-medium 3xl:text-5xl'
        style={{ letterSpacing: '.25rem' }}
      >
        Cada domingo <br className='md:hidden' /> es una nueva
      </span>

      <br />

      <h4
        className='text-3xl lg:text-4xl 3xl:text-5xl font-black'
        style={{ letterSpacing: '.10rem' }}
      >
        experiencia con DIOS
      </h4>

      <div
        className='flex flex-col md:flex-row justify-center items-center mt-4'
      >
        {
          schedules.map((schedule, idx) => {
            return (
              <div
                className={
                  `flex flex-col justify-center items-center text-center my-4 py-4 px-8 
                  ${idx === 0 && 'md:border-r border-solid border-secondary-500'}`
                }
                key={schedule.label}
              >
                <span className='text-xl text-secondary-500 font-medium xl:text-2xl'>{schedule.label}</span>
                <span className='text-4xl font-bold text-white'>{schedule.hour}</span>
              </div>
            )
          })
        }
      </div>

      <br />

      <Button onClick={() => router.push('/reservaciones')}>
        Reserva
      </Button>
    </section>
  )
}
