import React, { useEffect, useState } from "react"
import Photos from '../Photos/Photos'

const Gallery = ({ images }) => {
  const [imagesConfigured, setImagesConfigured] = useState([])

  useEffect(() => {
    setImagesConfigured(images.map((image) => {
      return {
        src: image.image.childImageSharp.fluid.src,
        width: image.image.childImageSharp.fluid.aspectRatio,
        height: 1
      }
    }))
  }, []) // eslint-disable-line

  return (
    <Photos 
      photos={imagesConfigured}
    />
  )
}

export default Gallery
