export const formatterDate = (date: string) => {
  if (date) {
    const formatter = new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    })

    return formatter.format(Date.parse(date))
  }
}
