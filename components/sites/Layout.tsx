import Head from 'next/head'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

type WithChildren<T = {}> = T & PropsWithChildren<{}>

export interface Meta {
  description?: string
  logo?: string
  // ogImage?: string
  // ogUrl?: string
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
      <div className="h-screen bg-black font-['Roboto'] text-white">
        {children}
        <footer className="flex h-16 w-full items-center justify-around bg-black text-eternal-gray">
          <div>&copy; {new Date().getFullYear()} ETERNAL CARD</div>
          <div className="flex items-center gap-3 ">
            <Link href="/about">About</Link>
            <a
              href="https://twitter.com/eternal-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/eternal-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://hexdom.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hexdom
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
