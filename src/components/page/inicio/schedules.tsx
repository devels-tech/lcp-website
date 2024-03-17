import { Card, Separator } from '@/components/ui'

export const Schedules = () => {
  return (
    <Card className='text-center max-w-lg mx-auto -mt-40 bg-zinc-50 dark:bg-zinc-950 z-10 relative p-4'>
      <h6 className='font-bold text-2xl'>Nuestros Servicios</h6>

      <div className='flex gap-x-4 justify-center items-start mt-2'>
        <div className='w-full py-2'>
          <span className='font-bold'>Servicio Dominical</span>

          <Separator className='my-2' />

          <div className='mt-2 text-right'>
            <div>
              <span>1er Servicio</span> <br />
              <span className='font-bold'>9:00am - 11:00am</span> <br />
            </div>

            <div className='mt-3'>
              <span>2do Servicio</span> <br />
              <span className='font-bold'>11:00am - 1:00pm</span> <br />
            </div>
          </div>
        </div>

        <Separator orientation='vertical' className='h-40' />

        <div className='w-full py-2'>
          <span className='font-bold'>Estudio Biblico</span>
          <Separator className='my-2' />

          <div className='mt-2 text-left'>
            <span>Miercoles</span> <br />
            <span className='font-bold'>6:00pm - 7:00pm</span> <br />
          </div>
        </div>
      </div>
    </Card>
  )
}
