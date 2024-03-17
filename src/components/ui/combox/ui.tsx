import { RegisterOptions, UseFormReturn } from 'react-hook-form'
import { ChevronsUpDown, Check } from 'lucide-react'
import { ReactNode, useState } from 'react'

import { cn } from '@/lib/utils'
import { FormField, FormItem, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Popover, PopoverContent, PopoverTrigger, FormLabel } from '..'

type TComboxItem = {
  value: string
  label: string
  image?: string
  icon?: ReactNode
}

interface IComboxProps {
  items: TComboxItem[]
  ctaPlaceholder: string
  notFoundLabel: string
  id: string
  form: UseFormReturn<any>
  value?: string
  label: string
  defaultValue?: string
  setValue?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  tabIndex?: number
  rules?: RegisterOptions<any>
  buttonClassName?: string
  popoverClassName?: string
}

export function ComboBox ({
  id,
  form,
  label,
  items,
  rules,
  value,
  disabled,
  setValue,
  tabIndex,
  placeholder,
  defaultValue,
  notFoundLabel,
  ctaPlaceholder,
  buttonClassName,
  popoverClassName
}: IComboxProps) {
  const [open, setOpen] = useState(false)

  if (form) {
    return (
      <FormField
        control={form.control}
        name={id}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, formState }) => (
          <FormItem className='flex flex-col'>
            {
              label && (
                <FormLabel className='flex'>
                  {label}&nbsp;

                  {
                    formState.errors?.pidType?.message && (
                      <span className='text-xs font-light'>
                        * {formState.errors.pidType.message as string}
                      </span>
                    )
                  }
                </FormLabel>
              )
            }

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild disabled={disabled}>
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
                      ? items.find((item) => item.value === field.value)?.label
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
                            form.setValue(id, value)
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

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between'
        >
          {
            value
              ? items.find((item) => item.value === value)?.label
              : ctaPlaceholder
          }

          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder={placeholder} className='h-9' />
          <CommandEmpty>{notFoundLabel}</CommandEmpty>

          <CommandGroup>
            {
              items.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {item.label}

                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === item.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))
            }
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
