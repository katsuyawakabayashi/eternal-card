import Link from 'next/link'
import React from 'react'

interface CardProps {
  title: string
}

const GalleryCard = ({ title }: CardProps) => {
  return (
    <Link href={`/${title}`}>
      <a>
        <img src={`${title}.png`} width={300} height={300} />
      </a>
    </Link>
  )
}

export default GalleryCard
