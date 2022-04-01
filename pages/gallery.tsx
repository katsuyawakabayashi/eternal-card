import Link from 'next/link'
import React from 'react'
import Card from '../components/Card'
import Layout from '../components/sites/Layout'

const Gallery = () => {
  return (
    <Layout>
      <div className="flex h-screen flex-col items-center">
        <div className="m-10 text-4xl tracking-widest text-eternal-gray">
          GALLERY
        </div>
        <div className="flex">
          <Card title="0" />
        </div>

        <span className="text-eternal-gray underline">
          <Link href="/">Go back to main page</Link>
        </span>
      </div>
    </Layout>
  )
}

export default Gallery
