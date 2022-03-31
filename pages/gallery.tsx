import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/sites/Layout'

const gallery = () => {
  return (
    <Layout>
      <div className="flex h-screen flex-col items-center">
        <div className="m-10 text-4xl tracking-widest text-eternal-gray">
          GALLERY
        </div>
        <div className="flex">
          <div className="p-10 text-eternal-gold">
            <div className="flex flex-col">
              <Image src="/monalisa.png" height={300} width={300} />
              <div className="text-center">#0</div>
            </div>
          </div>
          <div className="p-10 text-eternal-gold">
            <div className="flex flex-col">
              <Image src="/monalisa.png" height={300} width={300} />
              <div className="text-center">#0</div>
            </div>
          </div>
          <div className="p-10 text-eternal-gold">
            <div className="flex flex-col">
              <Image src="/monalisa.png" height={300} width={300} />
              <div className="text-center">#0</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="p-10 text-eternal-gold">
            <div className="flex flex-col">
              <Image src="/monalisa.png" height={300} width={300} />
              <div className="text-center">#0</div>
            </div>
          </div>
          <div className="p-10 text-eternal-gold">
            <div className="flex flex-col">
              <Image src="/monalisa.png" height={300} width={300} />
              <div className="text-center">#0</div>
            </div>
          </div>
          <div className="p-10 text-eternal-gold">
            <div className="flex flex-col">
              <Image src="/monalisa.png" height={300} width={300} />
              <div className="text-center">#0</div>
            </div>
          </div>
        </div>

        <span className="text-eternal-gray underline">
          <Link href="/">Go back to main page</Link>
        </span>
      </div>
    </Layout>
  )
}

export default gallery
