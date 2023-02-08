import type { RequestInit } from 'next/dist/server/web/spec-extension/request'
import type { IBannerToCreate, IBannerToUpdate, IReturnBanner, IReturnBanners } from '@/lib/types'

export const getAllBanners = async (): Promise<IReturnBanners> => {
  // const res = await fetch('http://localhost:8000/api/banners')
  const res = await fetch('/api/banners')

  if (!res.ok) {
    return {
      data: null,
      error: {
        status: res.status,
        message: 'ERROR_GET_BANNERS'
      }
    }
  }

  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const getBannerById = async (id: string): Promise<IReturnBanner> => {
  const res = await fetch(`/api/banners/${id}`)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const createBanner = async (banner: IBannerToCreate): Promise<IReturnBanner> => {
  const formData = new FormData()
  const entries = Object.entries(banner)

  entries.forEach(([key, value]) => {
    if (key === 'imageMobile' || key === 'imageDesktop') {
      if (!value) return
    }

    formData.append(key, value)
  })

  const options: RequestInit = { method: 'POST', body: formData }

  const res = await fetch('/api/banners', options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const updateBannerById = async (id: string, banner: IBannerToUpdate): Promise<IReturnBanner> => {
  const options: RequestInit = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(banner)
  }

  const res = await fetch(`/api/banners/${id}`, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const uploadImageOfBannerById = async (id: string, type: 'mobile' | 'desktop', image: File): Promise<IReturnBanner> => {
  const formData = new FormData()

  formData.append('type', type)
  formData.append('image', image)

  const options: RequestInit = { method: 'PUT', body: formData }

  const res = await fetch(`/api/banners/${id}/upload-image-${type}`, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const deleteBannerById = async (id: string): Promise<IReturnBanner> => {
  const options: RequestInit = { method: 'DELETE' }

  const res = await fetch(`/api/banners/${id}`, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}
