'use client'

import { UseFormReturn } from 'react-hook-form'
import { type ReactNode, type HTMLAttributes, useMemo, useEffect } from 'react'

import { cn } from '@/lib/utils'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Skeleton } from '..'

export interface IGenericSelectItems {
  label: string
  icon?: ReactNode
  value: boolean | string | number
}

export interface IGenericSelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  placeholder?: string
  tabIndex?: number
  items: IGenericSelectItems[]
  id: string
  form: UseFormReturn<any, any, any>
  label?: string
  classNameContainer?: string
  classNameSelect?: string
  classNameGroup?: string
  description?: string
  disabled?: boolean
  isLoading?: boolean
}

export const GenericSelect = ({
  id,
  label,
  defaultValue,
  placeholder,
  description,
  items,
  form,
  tabIndex,
  classNameContainer,
  classNameSelect,
  classNameGroup,
  disabled,
  isLoading
}: IGenericSelectProps) => {
  const localItems = useMemo(() => items, [items])

  useEffect(() => {
    console.log({ localItems })
  }, [localItems])

  if (isLoading) {
    return (
      <div className={cn('w-full', classNameContainer)}>
        <div className='flex justify-start items-end'>
          {label && <Skeleton className='h-5 w-full max-w-[90px]' />}
        </div>

        {description && <Skeleton className='h-5 w-full max-w-[150px] my-2' />}

        <div className='relative'>
          <Skeleton className='w-full h-9 mt-2' />
        </div>
      </div>
    )
  }

  return (
    <FormField
      control={form.control}
      name={id}
      defaultValue={defaultValue}
      render={({ field, formState }) => (
        <FormItem className={cn('w-full', classNameContainer)}>
          <div className='flex justify-start items-end'>
            {label && <FormLabel className='flex'>{label}&nbsp;</FormLabel>}
            {formState?.errors[id]?.message && <span className='text-xs font-light text-destructive'>* {formState.errors[id].message as any}</span>}
          </div>

          {description && (<FormDescription className='text-xs'>{description}</FormDescription>)}

          <div className='my-2'></div>

          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled} value={field?.value}>
            <FormControl>
              <SelectTrigger disabled={disabled} tabIndex={tabIndex} className={cn('w-full', classNameSelect)} >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              <SelectGroup className={cn('overflow-auto', classNameGroup)}>
                {!localItems.length ? <div className='px-2 py-1 text-sm'>Sin Resultados</div> : null}

                {
                  localItems.map(item => (
                    <SelectItem key={item.value?.toString()} value={item.value?.toString()} >
                      <div className='flex justify-center items-center'>
                        {
                          item?.icon && (
                            <div className='dark:text-white mr-2 h-5'>
                              {item.icon}
                            </div>
                          )
                        }

                        {item.label}
                      </div>
                    </SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}
