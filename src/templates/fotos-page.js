import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content/Content'

const FotosPage = () => {

  return (
    <Layout>
      <Hero
        titulo="Galeria de Fotos"
      />
      <Content>
        <p>Olá</p>
      </Content>
    </Layout>
  )
}

export default FotosPage

