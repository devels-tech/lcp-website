/* eslint-disable no-unused-vars */
import type { AppProps } from 'next/app'
import type { ComponentType, ReactElement, ReactNode } from 'react'
import type { NextComponentType, NextPageContext, NextLayoutComponentType, NextPage } from 'next'

declare module 'next' {
  type NextLayoutComponentType<P = {}> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactNode) => ReactNode
  }
}

declare module 'next/app' {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType
  }
}

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactNode) => ReactNode
  layout?: ComponentType
}

declare global {
  interface Window {
    dataLayer?: object[];
 }

 interface Error {
   info?: string
   status?: number
 }
}
