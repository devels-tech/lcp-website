import Image from 'next/image'
import { ITopicOfTheMonthProps } from '@/lib/types/banner'

export const TopicOfTheMonth = ({ topicOfTheMonth }: ITopicOfTheMonthProps) => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={topicOfTheMonth.desktop[0]}
        alt='La Casa de mi Padre'
        className='w-full h-full object-cover'
        quality={100}
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={topicOfTheMonth.mobile[0]}
        alt='La Casa de mi Padre'
        className='w-full h-full object-cover'
        quality={100}
      />
    </div>
  </div>
)
