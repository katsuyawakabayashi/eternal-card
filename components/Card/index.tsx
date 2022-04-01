import Link from 'next/link'
import React from 'react'

interface CardProps {
  title: string
}

const Card = ({ title }: CardProps) => {
  return (
    <div>
      <Link href={`/${title}`}>
        <div className="p-10 text-eternal-gold">
          <div className="flex flex-col">
            <img src={`/${title}.png`} height={300} width={300} />
            <div className="text-center">#{title}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
