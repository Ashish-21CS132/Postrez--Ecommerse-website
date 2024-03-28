import React from 'react'
import bannerimg from '../assests/banner.jpeg'

const Hero = () => {
  return (
    <div
      className="h-[80vh]  "
      style={{
        backgroundImage: `url(${bannerimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="center flex-col gap-3 h-full bg-black bg-opacity-50">
        <h1 className="text-white text-2xl font-bold">
          Exclusive Print and Artwork
        </h1>
        <h1 className="text-white">
          Exclusive Art Pieces for the Exclusive You
        </h1>
        <button className="btn-primary">Explore All</button>
      </div>
    </div>
  )
}

export default Hero
