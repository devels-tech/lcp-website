import { UseFormRegister } from 'react-hook-form'

import { IReservations, TWorshipId, IDataFormReservation } from '@/lib/types'

import { rules } from './formConfig'
import { useEffect, useState } from 'react'

interface ISelectChairsProps {
  reservations: IReservations
  currentWorshipId: undefined | TWorshipId
  registerInputForm: UseFormRegister<IDataFormReservation>
  errorsInputForm: {
    [x: string]: any
  }
}

export const SelectChairs = ({ reservations, currentWorshipId, registerInputForm, errorsInputForm }: ISelectChairsProps) => {
  const [chairsOptions, setChairsOptions] = useState(10)

  useEffect(() => {
    if (currentWorshipId) {
      if (reservations.MAX_RESERVATIONS - reservations[currentWorshipId].total >= 10) setChairsOptions(10)
      else if (reservations.MAX_RESERVATIONS - reservations[currentWorshipId].total === 0) setChairsOptions(1)
      else setChairsOptions(reservations.MAX_RESERVATIONS - reservations[currentWorshipId].total)
    }
  }, [currentWorshipId, reservations])

  return (
    <div className='w-full flex justify-center items-center font-bold'>
      <div className='w-full mr-2'>
        <label htmlFor='chairs'>Numero de <br className='md:hidden' /> Asientos:</label>
        {errorsInputForm.chairs && <p className='text-red-600'>{errorsInputForm.chairs.message}</p>}

        <select
          id='chairs'
          name='chairs'
          tabIndex={7}
          className='relative w-full px-3 py-1.5 my-2 bg-[rgba(255,255,255,.13)] rounded-2xl border border-solid border-black outline-none appearance-none leading-8'
          {...registerInputForm('chairs', rules.chairs)}
        >
          {
            [...Array(chairsOptions).keys()].map(option => (
              <option key={option} className='text-black' value={option + 1}>
                {option + 1 }
              </option>
            ))
          }
        </select>
      </div>

      <div className='w-full ml-2'>
        <label htmlFor='kidChairs'>Numero de <br className='md:hidden' /> Niños:</label>
        {errorsInputForm.kidChairs && <p className='text-red-600'>{errorsInputForm.kidChairs.message}</p>}

        <select
          id='kidChairs'
          name='kidChairs'
          tabIndex={8}
          className='relative w-full px-3 py-1.5 my-2 bg-[rgba(255,255,255,.13)] rounded-2xl border border-solid border-black outline-none appearance-none leading-8'
          {...registerInputForm('kidChairs', rules.kidChairs)}
        >
          {
            [...Array(6).keys()].map(option => (
              <option key={option} className='text-black' value={option}>
                {option}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}
