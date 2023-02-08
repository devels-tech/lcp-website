export const registerBautipsm = async ({ inscription }) => {
  console.log('registerBautipsm', { inscription })
  const res = await fetch('https://en6d9u19uybfzdn.m.pipedream.net', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([[
      'asd', 'asds'
    ]])
  })
  const data = await res.json()

  console.log('registerBautipsm', { data })
}
