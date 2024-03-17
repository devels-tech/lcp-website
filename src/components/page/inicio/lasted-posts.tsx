import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardFooter } from '@/components/ui'
import { ImageOff } from 'lucide-react'
import Link from 'next/link'

export const LastedPosts = () => {
  return (
    <section className='min-h-screen max-w-5xl mx-auto mt-20 px-4 sm:px-10'>
      <div>
        <h5 className='font-bold text-xl'>Ultimas Publicaciones</h5>

        <Link href='/blog' className='text-xs underline text-blue-500'>
          Ver Mas
        </Link>
      </div>

      <ul className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row gap-10 mt-4'>
        {
          Array.from({ length: 5 }).map((_, index) => (
            <li className='w-full' key={index}>
              <Card className='p-0 overflow-clip'>
                <Avatar className='rounded-none w-full h-52 relative'>
                  <AvatarFallback>
                    <ImageOff />
                  </AvatarFallback>

                  <AvatarImage
                    className='rounded-none object-cover w-full h-full'
                    src='https://www.lcpcaracas.org/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Flcp-caracas-a5bf3.appspot.com%2Fo%2Fblog%252Farticles%252Fvolvamos-a-comer-en-familia.webp%3Falt%3Dmedia%26token%3Dd3b4f352-4b34-44bc-8b3f-e12dd530820e&w=640&q=75'
                  />

                  <Badge className='absolute bottom-2 right-2'>Categoria</Badge>
                </Avatar>

                <CardContent className='p-4'>
                  <Link href={`/devocionales/${index}`} className='hover:text-blue-500 inline-block'>
                    <h6 className='font-bold'>Titulo</h6>
                  </Link>

                  <br />

                  <span className='text-xs font-bold'>Yadmile Godoy</span>

                  <p className='text-xs text-muted-foreground mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab libero soluta natus at voluptas totam odio quo repudiandae.
                  </p>
                </CardContent>

                <CardFooter className='px-4 pb-4 gap-x-2 m-0'>
                  {/* <Button className='w-full'>Ver</Button> */}
                  <Button className='w-full'>Ver Publicación</Button>
                </CardFooter>
              </Card>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
