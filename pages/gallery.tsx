import Link from 'next/link'
import React from 'react'
import GalleryCard from '../components/GalleryCard'
import Layout from '../components/sites/Layout'

const Gallery = () => {
  return (
    <Layout>
      <div className="flex h-full flex-col items-center">
        <div className="m-10 text-4xl tracking-widest text-eternal-gray">
          GALLERY
        </div>
        <div className="grid grid-cols-3">
          <GalleryCard title="12" />
        </div>

        <span className="text-eternal-gray underline">
          <Link href="/">Go back to main page</Link>
        </span>
      </div>
    </Layout>
  )
}

export default Gallery
