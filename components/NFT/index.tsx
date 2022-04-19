import React from 'react'

interface NFTProps {
  title: number
}

const NFT = ({ title }: NFTProps) => {
  return (
    <video loop autoPlay={true} muted>
      <source src={`/${title}.mp4`} />
    </video>
  )
}

export default NFT
