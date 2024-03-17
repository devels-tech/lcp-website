import { UseFormReturn } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Label } from '..'
import { BaseInput } from './base'

interface IInputProps {
  form: UseFormReturn<any, any, any>
  placeholder?: string
  label?: string
  description?: string
  id: string
  type?: 'text' | 'email' | 'tel' | 'number' | 'password'
}

export const Input = ({ form, placeholder, label, description, id, type = 'text' }:IInputProps) => {
  if (!form) {
    return (
      <div>
        <Label>{label}</Label>
        <BaseInput id={id} name={id} placeholder={placeholder} type={type} />
      </div>
    )
  }

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={id}>{label}</FormLabel>

          <FormMessage className='text-xs' />

          <FormControl>
            <BaseInput id={id} name={id} placeholder={placeholder} type={type} />
          </FormControl>

          { description && <FormDescription className='text-xs'>{description}</FormDescription> }
        </FormItem>
      )}
    />
  )
}
