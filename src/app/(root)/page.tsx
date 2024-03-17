import { Hero } from '@/components/page/inicio/hero'
import { LastedPosts } from '@/components/page/inicio/lasted-posts'
import { Schedules } from '@/components/page/inicio/schedules'

export default function HomePage () {
  return (
    <>
      <Hero />
      <Schedules />
      <LastedPosts />
    </>
  )
}
