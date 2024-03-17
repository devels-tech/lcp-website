import { useState, useRef, useEffect, type ReactNode, useMemo } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Check } from 'lucide-react'

import { ComboxItem, ComboxItemExtended } from './types'

import { FormDescription, FormField, FormItem, FormLabel, Badge, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, Popover, PopoverContent, PopoverTrigger, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../'
import { cn } from '@/lib/utils'

interface CheckBoxFieldProps {
  form: UseFormReturn<any, any, any>
  id: string
  description: string
  icon: ReactNode
  placeholder: string
  label: string
  tabIndex: number
  items: ComboxItem[]
  classNameContainer?: string
  classNamePopover?: string
  disabled?: boolean
}

export const CheckboxField = (props: CheckBoxFieldProps) => {
  const { form, id, description, icon, placeholder, label, tabIndex, items, classNameContainer, classNamePopover, disabled } = props

  const [itemsExtended, setItemsExtended] = useState<ComboxItemExtended[]>([])
  const [comboxWidth, setComboxWidth] = useState(null)
  const elementRef = useRef(null)

  const defaultItems = form?.formState?.defaultValues[id]

  const formatItems = (item: ComboxItem): ComboxItemExtended => ({
    ...item,
    selected: defaultItems ? defaultItems.includes(item.value) : false
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const itemsFormatted: ComboxItemExtended[] = useMemo(() => items.map(formatItems), [defaultItems])

  const getSelectedItems = useMemo(() => {
    const selectedItems = itemsExtended.filter((item) => item.selected).map((item) => item.value)
    return selectedItems
  }, [itemsExtended])

  const resetFilters = () =>
    setItemsExtended((prevState) =>
      prevState.map((item) => ({ ...item, selected: false }))
    )

  const selectItemFilter = (itemId: string, selected: boolean) => {
    const items = itemsExtended.map((item) => {
      if (item.id === itemId) {
        return { ...item, selected }
      }

      return item
    })

    setItemsExtended(items)

    form.setValue(
      id,
      items.filter((item) => item.selected).map((item) => item.value),
      { shouldDirty: true }
    )
  }

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    // Crea una instancia de ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width
      setComboxWidth(width)
    })

    // Observa el elemento
    resizeObserver.observe(element)

    // Limpia la instancia de ResizeObserver cuando el componente se desmonta
    return () => {
      resizeObserver.unobserve(element)
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    setItemsExtended(itemsFormatted)
  }, [itemsFormatted])

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field, formState }) => {
        return (
          <FormItem className={cn('w-full space-y-2', classNameContainer)}>
            <div className='flex justify-start items-end'>
              {label && <FormLabel className='flex'>{label}&nbsp;</FormLabel>}
              {formState?.errors[id]?.message && <span className='text-xs font-light text-destructive'>* {formState.errors[id].message as any}</span>}
            </div>

            {description && (<FormDescription className='text-xs'>{description}</FormDescription>)}

            <Popover>
              <PopoverTrigger asChild disabled={disabled}>
                <Button
                  ref={elementRef}
                  type='button'
                  variant='outline'
                  size='sm'
                  disabled={disabled}
                  className='py-5 border w-full justify-start'
                  tabIndex={tabIndex}
                >
                  {icon && icon}

                  {
                    !getSelectedItems.length && (
                      <span className='text-muted-foreground font-normal'>
                        {placeholder || 'Seleccione alguna opción'}
                      </span>
                    )
                  }

                  {
                    getSelectedItems.length > 0 && (
                      <>
                        <Badge
                          variant='secondary'
                          className='rounded-sm px-1 font-normal lg:hidden'
                        >
                          {getSelectedItems.length} seleccionados
                        </Badge>

                        <div className='hidden space-x-1 lg:flex'>
                          {
                            getSelectedItems.length > 2
                              ? (
                                <Badge
                                  variant='secondary'
                                  className='rounded-sm px-1 font-normal'
                                >
                                  {getSelectedItems.length} seleccionados
                                </Badge>
                              )
                              : (
                                itemsExtended
                                  .filter((item) => item.selected)
                                  .map((item) => {
                                    return (
                                      <Badge
                                        variant='secondary'
                                        key={item.value.toString()}
                                        className='rounded-sm px-1 font-normal'
                                      >
                                        {item.label}
                                      </Badge>
                                    )
                                  })
                              )}
                        </div>
                      </>
                    )
                  }
                </Button>
              </PopoverTrigger>

              <style>
                {`
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${comboxWidth + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${comboxWidth + 10}px !important;
                  }
                `}
              </style>

              <PopoverContent
                className={cn('w-full p-0 combox-checkbox-content', classNamePopover)}
                align='start'
              >
                <Command style={{ width: '50px !important' }}>
                  <CommandInput placeholder={label} />

                  <CommandList>
                    <CommandEmpty>Sin Resultados</CommandEmpty>

                    <CommandGroup>
                      {
                        itemsExtended.map((item, idx) => {
                          return (
                            <TooltipProvider key={idx}>
                              <Tooltip delayDuration={150}>
                                <TooltipTrigger className='w-full'>
                                  <CommandItem
                                    key={item.value.toString()}
                                    onSelect={() => {
                                      if (item.selected) {
                                        selectItemFilter(item.id, false)
                                      } else {
                                        selectItemFilter(item.id, true)
                                      }
                                    }}
                                  >
                                    <div
                                      className={cn(
                                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                        item.selected
                                          ? 'bg-primary text-primary-foreground'
                                          : 'opacity-50 [&_svg]:invisible'
                                      )}
                                    >
                                      <Check className={cn('h-4 w-4')} />
                                    </div>

                                    {item.icon}

                                    <span className='truncate'>{item.label}</span>
                                  </CommandItem>
                                </TooltipTrigger>

                                <TooltipContent className='whitespace-normal checkbox-tooltip-content' sideOffset={20}>
                                  <p>{item.label}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )
                        })
                      }
                    </CommandGroup>

                    {
                      getSelectedItems.length > 0 && (
                        <>
                          <CommandSeparator />

                          <CommandGroup>
                            <CommandItem
                              onSelect={() => {
                                form.setValue(id, [])
                                resetFilters()
                              }}
                              className='justify-center text-center'
                            >
                              Limpiar
                            </CommandItem>
                          </CommandGroup>
                        </>
                      )
                    }
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </FormItem>
        )
      }}
    />
  )
}
