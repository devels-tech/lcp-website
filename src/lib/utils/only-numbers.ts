export const handleOnlyNumbers = (event) => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault()
  }
}