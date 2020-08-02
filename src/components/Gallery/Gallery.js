import React, { useEffect, useState } from "react"
import GalleryImages from 'react-grid-gallery';

const Gallery = ({ images }) => {
  const [imagesConfigured, setImagesConfigured] = useState([])

  useEffect(() => {
    setImagesConfigured(images.map((image) => {
      return {
        src: image.image.childImageSharp.fluid.src,
        thumbnail: image.image.childImageSharp.fluid.src,
        caption: image.title
      }
    }))
  }, [])

  return (
    <div 
      className="block w-full overflow-auto mx-auto"
    >
      <GalleryImages 
        images={imagesConfigured} 
        enableImageSelection={false}
      />
    </div>
  )
}

export default Gallery
