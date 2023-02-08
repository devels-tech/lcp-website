/* eslint-disable camelcase */

//  Common types
export type TImagesFormatsCloudinary = {
  thumbnail: {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: null | string
    url: string
    provider_metadata: {
      public_id: string
      resource_type: string
    }
  }
  small: {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: null | string
    url: string
    provider_metadata: {
      public_id: string
      resource_type: string
    }
  }
}

export type TImageResCloudinary = {
  _id: string
  name: string
  alternativeText: string
  caption: string
  hash: string
  ext: string
  mime: string
  size: number
  width: number
  height: number
  url: string
  provider_metadata: {
    public_id: string
    resource_type: string
  }
  formats: TImagesFormatsCloudinary
  provider: string
  related: string[]
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}

// User Types

export type TUserStrapi = {
  confirmed: true
  blocked: false
  _id: string
  username: string | undefined
  email: string
  provider: string
  createdAt: string
  updatedAt: string
  __v: number
  avatar: TImageResCloudinary
  role: string
  id: string
}

// Article Types

export type TArticleRes = {
  _id: string
  titulo: string
  contenido: string | any // Puede venir en tipo Source de next-mdx-remote
  descripccion: string
  published_at: string
  slug: string
  createdAt: string
  updatedAt: string
  __v: number
  categoria: string
  imagen_principal: TImageResCloudinary
  users_permissions_user: TUserStrapi
  etiqueta: string
  id: string
}

export type TArticlesRes = TArticleRes[]

// Categories Types

export type TCategoryRes = {
  tipo: string
  _id: string
  published_at: string
  createdAt: string
  updatedAt: string
  __v: number
  imagen_principal: TImageResCloudinary
  articulos: TArticleRes[]
  id: string
}

export type TCategoriesRes = TCategoryRes[]

export type TCategoryNormalized = {
  id: string
  title: string
  image: string
}

export type TCategoriesNormalized = TCategoryNormalized[]
