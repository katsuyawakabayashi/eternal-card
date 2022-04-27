import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Layout, { Meta } from '../components/sites/Layout'

const Home: NextPage = () => {
  const [connectedWallets, setConnectedWallets] = useState<string>()
  const [authenticated, setAuthenticated] = useState<boolean>()
  const [topButton, setTopButton] = useState<boolean>(false)
  const meta = {
    description: 'ETERNAL ASSETS',
    title: 'ETERNALCARD',
  } as Meta

  const walletConnectHandler = async () => {
    if (typeof window !== 'undefined') {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
          setConnectedWallets(accounts)
        } catch (error) {
          console.log('Error')
        }
        setAuthenticated(true)
      } else {
        console.log('Wallet not detected')
      }
    }
  }
  const checkAuthentication = async () => {}
  if (typeof window !== 'undefined') {
    if (window.ethereum) {
      if (authenticated) {
        try {
          walletConnectHandler()
        } catch (error) {
          console.log('Error')
        }
      } else {
        console.log('havnet authenticated')
      }
    } else {
      console.log('Wallet not detected')
    }
  }

  useEffect(() => {
    checkAuthentication()
    if (document.body.scrollTop > 50) {
      setTopButton(true)
      console.log('top true')
    } else {
      console.log('top false')
      setTopButton(true)
    }
  }, [])

  return (
    <Layout meta={meta}>
      <div className="relative">
        <div className="flex w-screen">
          {topButton ? (
            <div className="fixed right-4 top-5">
              {connectedWallets ? (
                <span>
                  Connected Wallet: <span>{connectedWallets}</span>
                </span>
              ) : (
                <button
                  onClick={walletConnectHandler}
                  className="rounded-2xl bg-eternal-gray/40 p-2"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          ) : (
            <div className="fixed right-4 bottom-5">
              {connectedWallets ? (
                <span>
                  Connected Wallet: <span>{connectedWallets}</span>
                </span>
              ) : (
                <button
                  onClick={walletConnectHandler}
                  className="rounded-2xl bg-eternal-gray/40 p-2"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          )}
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
