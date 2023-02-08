import Skeleton from 'react-loading-skeleton'

export const SectionFillSkeleton = () => {
  return (
    <div className='h-full relative'>
      <Skeleton className='h-full top-0 absolute' />

      <div className='w-full h-full flex justify-center items-center absolute top-0 px-4 text-center'>
        <span className='text-3xl font-bold 3xl:text-4xl'>Cargando Tema <br /> del Mes</span>
      </div>
    </div>
  )
}
