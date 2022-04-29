import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import GalleryCard from '../components/GalleryCard'
import Layout, { Meta } from '../components/sites/Layout'

const Gallery = () => {
  const meta = {
    description: 'ETERNAL CARD Gallery',
    title: 'Gallery',
  } as Meta
  return (
    <Layout meta={meta}>
      <div className="flex h-screen flex-col items-center">
        <div className="my-10 text-4xl tracking-widest text-eternal-gray ">
          Gallery
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <GalleryCard title="0" />
          <GalleryCard title="1" />
          <GalleryCard title="2" />
          <GalleryCard title="3" />
          <GalleryCard title="4" />
          <GalleryCard title="5" />
        </div>

        <span className="mt-24 text-eternal-gray underline hover:text-white">
          <Link href="/">Go back to main page</Link>
        </span>
      </div>
      <Footer />
    </Layout>
  )
}

export default Gallery
