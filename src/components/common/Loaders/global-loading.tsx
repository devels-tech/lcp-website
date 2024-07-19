export const Loading = ({ title }: { title: string }) => {
  return (
    <div className='w-screen h-screen bg-zinc-800/50 fixed top-0 left-0 flex flex-col justify-center items-center z-50'>
      <div className='max-w-md w-full bg-white rounded-md p-4 flex flex-col justify-center items-center'>
        <svg className='text-primary-400 animate-spin h-20 w-20 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
          <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
        </svg>

        <div className='mt-2 text-center'>
          <span className='font-bold text-2xl'>{title}</span> <br />
          <small>Por favor, espere.</small>
        </div>
      </div>
    </div>
  )
}