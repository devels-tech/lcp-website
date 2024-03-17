export function downloadImage (src: string, filename: string) {
  fetch(src)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', filename || 'imagen.jpg')
      document.body.appendChild(link)
      link.click()
    })
}
