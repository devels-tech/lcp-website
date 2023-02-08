import { CancelCircular } from '@/components/common/Icons'

export const ErrorForm = ({ children }) => (
  <div className='flex items-center mt-4'>
    <CancelCircular stroke='red' />
    <span className='ml-4'>{children}</span>
  </div>
)
