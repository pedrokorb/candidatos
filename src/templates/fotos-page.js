import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import Gallery from '../components/Gallery/Gallery'
import Content from '../components/Content/Content'

const FotosPage = () => {

  return (
    <Layout>
      <Hero
        titulo="Galeria de Fotos"
      />
      <Content>
        <h2 className="text-3xl px-8 text-center mb-8">Veja algumas fotos do nosso candidato</h2>
        <Gallery />
      </Content>
    </Layout>
  )
}

export default FotosPage

