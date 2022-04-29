import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex h-16 w-full items-center justify-around bg-black ">
      <span className="text-eternal-gray hover:text-white">
        &copy; {new Date().getFullYear()} <Link href="/">ETERNAL CARD</Link>
      </span>
      <div className="flex items-center gap-3 ">
        <span className="text-eternal-gray hover:text-white">
          <Link href="/about">About</Link>
        </span>
        <span className="text-eternal-gray hover:text-white">
          <a
            href="https://twitter.com/eternalcard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </span>
        <span className="text-eternal-gray hover:text-white">
          <a
            href="https://hexdom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hexdom
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
