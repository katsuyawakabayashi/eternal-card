import Head from 'next/head'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

type WithChildren<T = {}> = T & PropsWithChildren<{}>

export interface Meta {
  description?: string
  logo?: string
  title?: string
}

interface LayoutProps extends WithChildren {
  meta?: Meta
}

const Layout = ({ meta, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{meta?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href={meta?.logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={meta?.logo} />
      </Head>
      <div className="relative bg-black font-['Roboto'] text-white">
        {children}
      </div>
    </div>
  )
}

export default Layout
