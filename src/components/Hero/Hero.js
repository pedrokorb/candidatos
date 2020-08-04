import React from 'react'

const Hero = ({ title, imageSrc }) => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url(${imageSrc})`,
        height: '350px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'botton center',
        backgroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center flex flex-row justify-center">
        <h1
          className="mt-40 text-white text-4xl px-10 font-bold"
          style={{ textShadow: '1px 1px 4px rgba(34, 34, 34, 0.6)' }}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}

export default Hero
