import type { NextPage } from 'next'
import Link from 'next/link'
import { connected } from 'process'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Layout, { Meta } from '../components/sites/Layout'

const Home: NextPage = () => {
  const [connectedWallets, setConnectedWallets] = useState<string>()
  const meta = {
    description: 'ETERNAL ASSETS',
    title: 'ETERNALCARD',
  } as Meta

  const requestAccount = async () => {
    if (typeof window !== 'undefined') {
      if (window.ethereum) {
        console.log('Detected')
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
          setConnectedWallets(accounts)
        } catch (error) {
          console.log('Error')
          console.log(error)
        }
      } else {
        console.log('Not detected')
      }
    }
  }
  useEffect(() => {
    requestAccount()
    if (connectedWallets) {
      console.log(connectedWallets)
    } else {
      console.log('Not connected')
      console.log(connectedWallets)
    }
  }, [])

  return (
    <Layout meta={meta}>
      <div className="">
        <button onClick={requestAccount}>Connect Wallet:</button>
        <span>{connectedWallets}</span>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-black py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <div className="flex h-screen items-center">
            <video autoPlay={true} muted src="/hero.mp4" />
          </div>
          <div className="flex h-screen items-center justify-center ">
            <div className="flex flex-col justify-center">
              <div className="text-3xl tracking-widest">ETERNAL CARD</div>
              <div className="flex justify-center gap-5 p-5 text-eternal-gold ">
                <span className="hover:opacity-80">
                  <Link href="/gallery">Gallery</Link>
                </span>
                <span className="hover:opacity-80">
                  <a
                    href="https://opensea.io/collection/eternalcard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Purchase
                  </a>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Layout>
  )
}

export default Home
