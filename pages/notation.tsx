import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/sites/Layout'

const Notation = () => {
  return (
    <Layout>
      <div className="flex h-screen flex-col items-center">
        <div className="m-10 text-4xl tracking-widest text-eternal-gray">
          Notation
        </div>
        <div className="p-10 text-center leading-10 ">
          <p>
            Please contact{' '}
            <a href="mailto:notation@eternal-card.com">
              notation@eternal-card.com
            </a>{' '}
            for more details.
          </p>
        </div>
        <span className="mt-24 text-eternal-gray underline hover:text-white">
          <Link href="/">Go back to main page</Link>
        </span>
        <Footer />
      </div>
    </Layout>
  )
}

export default Notation
