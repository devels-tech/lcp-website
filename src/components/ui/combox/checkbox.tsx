import { ComboboxCheckboxReadOnly } from './readonly'
import { ComboxCheckBoxProps } from './types'

import { CheckboxField } from './checkbox-field'

export const ComboxCheckbox = ({ id, description, icon, placeholder, label, tabIndex, classNameContainer, readOnly, classNamePopover, disabled, ...rest }: ComboxCheckBoxProps) => {
  if (readOnly) {
    return (
      <ComboboxCheckboxReadOnly
        label={label}
        description={description}
        classNameContainer={classNameContainer}
        classNamePopover={classNamePopover}
        icon={icon}
        placeholder={placeholder}
        tabIndex={tabIndex}
        disabled={disabled}
        // @ts-ignore
        form={rest?.form || null}
        // @ts-ignore
        items={rest?.items || []}
      />
    )
  }

  return (
    <CheckboxField
      id={id}
      label={label}
      classNameContainer={classNameContainer}
      description={description}
      classNamePopover={classNamePopover}
      icon={icon}
      placeholder={placeholder}
      tabIndex={tabIndex}
      disabled={disabled}
      // @ts-ignore
      form={rest?.form || null}
      // @ts-ignore
      items={rest?.items || []}
    />
  )
}
