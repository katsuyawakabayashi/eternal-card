import { ethers } from 'ethers'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Layout, { Meta } from '../components/sites/Layout'

const Home: NextPage = () => {
  const [connectedWallets, setConnectedWallets] = useState<string>('1')
  const meta = {
    description: 'ETERNAL ASSETS',
    title: 'ETERNALCARD',
  } as Meta

  useEffect(() => {
    let data = window.localStorage.getItem('connectedWallets')
    if (data !== null) {
      setConnectedWallets(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWallets)
    )
  }, [connectedWallets])

  const requestAccount = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setConnectedWallets(accounts[0])
      } catch (error) {
        if (error === 4001) {
          alert('Error connecting')
        } else {
          alert(error)
        }
      }
    }
  }

  const connectWallet = async () => {
    if (typeof window !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
    }
  }

  return (
    <Layout meta={meta}>
      <div className="relative">
        <div className="flex w-screen">
          <div className="fixed right-4 top-5">
            {connectedWallets ? (
              <button className="group relative w-40 rounded-2xl bg-eternal-gray/40 p-2">
                <span className="z-10 h-20 text-white group-hover:opacity-0">
                  Connected
                </span>
                <span className="absolute inset-0 z-50 mx-5 flex items-center   text-white opacity-0 duration-500 group-hover:opacity-100">
                  <span className="truncate">{connectedWallets}</span>
                </span>
              </button>
            ) : (
              <button
                onClick={requestAccount}
                className="w-40 truncate rounded-2xl bg-eternal-gray/40 p-2"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <div className="flex h-screen w-screen max-w-7xl items-center">
            <video autoPlay={true} loop muted src="/hero.mp4" />
          </div>
          <div className="flex h-screen items-center justify-center ">
            <div className="flex flex-col justify-center">
              <div className="text-2xl tracking-widest sm:text-3xl">
                ETERNAL CARD
              </div>
              <div className="flex justify-center gap-5 p-5 text-eternal-gold">
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
