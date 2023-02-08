import Link from 'next/link'

export const ArticleNotFounded = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-screen-8 mt-20'>
      <span className='text-3xl font-bold 3xl:text-4xl'>Articulo no encontrado</span>

      <Link href='/' className='text-lg text-secondary-500 xl:text-xl'>
        Ir al inicio
      </Link>
    </div>
  )
}
