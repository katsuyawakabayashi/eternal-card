import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Layout, { Meta } from '../components/sites/Layout'

const About = () => {
  const meta = {
    description: 'About ETERNAL CARD',
    title: 'About',
  } as Meta
  return (
    <Layout>
      <div className="flex h-screen flex-col items-center">
        <div className="m-10 text-4xl tracking-widest text-eternal-gray">
          About
        </div>
        <div className="p-10 text-center leading-10">
          <p>ETERNAL CARD is a non-depreciable, blockchain powered asset.</p>
          <p>Our mission is to standardize the world’s digital assets.</p>
          <p>In blockchain, we trust.</p>
        </div>
        <span className="my-24 text-eternal-gray underline hover:text-white">
          <Link href="/">Go back to main page</Link>
        </span>
      </div>
      <Footer />
    </Layout>
  )
}

export default About
