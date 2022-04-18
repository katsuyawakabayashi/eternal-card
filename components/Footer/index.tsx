import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="flex h-16 w-full items-center justify-around bg-black text-eternal-gray">
        <div>&copy; {new Date().getFullYear()} ETERNAL CARD</div>
        <div className="flex items-center gap-3 ">
          <Link href="/about">About</Link>
          <a
            href="https://twitter.com/eternalcard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
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
  )
}

export default Footer
