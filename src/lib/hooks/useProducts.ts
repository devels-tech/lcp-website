import { getProducts } from '@/lib/utils/shop/getProducts'
import { useEffect, useState } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      const data = await getProducts()
      setIsLoading(false)

      if (!data) setError('Hubo un error en los Productos')
      else setProducts(data)
    })()
  }, [])

  return {
    products,
    productsIsLoading: isLoading,
    productsError: error
  }
}
