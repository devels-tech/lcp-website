'use client'

import { Dialog, Button, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Form } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'

import { ILogin, loginSchema } from '@/lib/schema/auth'
import { User } from 'lucide-react'

export function LoginDialog () {
  const form = useForm<ILogin>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: ILogin) => {
    console.log({ data })
  }

  return (
    <Dialog>
      <DialogTrigger>
        <User className='h-12 w-12 p-4 rounded-full bg-muted' />
        {/* <Image
          src=''
          imageClassName='w-12 h-12'
          containerClassName='h-12 w-12 p-4 rounded-full '
        /> */}
      </DialogTrigger>

      <DialogContent className='max-w-96'>
        <DialogHeader>
          <DialogTitle>Iniciar Sesión</DialogTitle>
          <DialogDescription>
            Inicia sesion como miembro de La Casa de mi Padre
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
            <Input
              form={form}
              id='email'
              type='email'
              label='Correo Electrónico'
              placeholder='usuario@correo.com'
            />
            <Input
              form={form}
              id='password'
              type='password'
              label='Contraseña'
              placeholder='***********'
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant='outline' className='w-full' type='button'>Cancelar</Button>
              </DialogClose>
              <Button className='w-full' type='submit'>Iniciar Sesión</Button>
            </DialogFooter>
          </form>
        </Form>

      </DialogContent>
    </Dialog>
  )
}
