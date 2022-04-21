import React from 'react'

interface NFTProps {
  title: string
}

const NFTComponent = ({ title }: NFTProps) => {
  return (
    <video loop autoPlay={true} muted>
      <source src={`/${title}.mp4`} />
    </video>
  )
}

export default NFTComponent
