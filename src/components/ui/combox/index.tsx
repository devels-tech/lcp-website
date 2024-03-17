import { Check, ChevronsUpDown } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'

import { FormField, FormItem, Label, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Popover, PopoverContent, PopoverTrigger, Skeleton } from '..'

type TGenericComboxItem = {
  value: string
  label: string
  image?: string
  icon?: ReactNode
}

interface IGenericComboxProps {
  items: TGenericComboxItem[]
  ctaPlaceholder: string
  notFoundLabel: string
  id: string
  form: UseFormReturn<any>
  label: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  tabIndex?: number
  buttonClassName?: string
  popoverClassName?: string
  isLoading?: boolean
}

export function GenericCombobox ({
  id,
  form,
  label,
  items,
  disabled,
  tabIndex,
  isLoading,
  placeholder,
  defaultValue,
  notFoundLabel,
  ctaPlaceholder,
  buttonClassName,
  popoverClassName
}: IGenericComboxProps) {
  const [open, setOpen] = useState(false)

  if (isLoading) {
    return (
      <div className={cn('w-full')}>
        <div className='flex justify-start items-end'>
          {label && <Skeleton className='h-5 w-full max-w-[90px]' />}
        </div>

        <div className='relative'>
          <Skeleton
            className={cn('w-full h-9 mt-2')}
          />
        </div>
      </div>
    )
  }

  return (
    <FormField
      control={form.control}
      name={id}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <Label>{label}</Label>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                disabled={disabled}
                tabIndex={tabIndex}
                variant='outline'
                role='combobox'
                style={{ marginTop: 12 }}
                className={cn('w-min justify-between', !field.value && 'text-muted-foreground', `${buttonClassName}`)}
              >
                {
                  field.value
                    ? items.find((item) => item?.value?.toUpperCase() === field?.value?.toUpperCase())?.label
                    : ctaPlaceholder
                }
                <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
              </Button>
            </PopoverTrigger>

            <PopoverContent className={cn('w-[200px] p-0', popoverClassName)}>
              <Command>
                <CommandInput placeholder={placeholder} className='h-9' />
                <CommandEmpty>{notFoundLabel}</CommandEmpty>

                <CommandGroup>
                  {
                    items.map((item) => (
                      <CommandItem
                        value={item.value}
                        key={item.value}
                        onSelect={(value) => {
                          form.setValue(id, value, { shouldDirty: true })
                          setOpen(false)
                        }}
                        className='w-full flex justify-start items-center'
                      >
                        {item?.image && <img src={item.image} alt={item.label} width={40} className='mr-2' />}
                        {item?.icon && item.icon}

                        {item.label}

                        <Check
                          className={cn(
                            'ml-auto h-4 w-4',
                            item.value === field.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))
                  }
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  )
}
