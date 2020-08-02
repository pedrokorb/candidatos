import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content/Content'
import Timeline from '../components/Timeline/Timeline'

const TrajetoriaPage = () => {

  return (
    <Layout>
      <Hero
        title="Trajetória"
      />
      <Content>
        <h2 className="text-3xl px-8 text-center mb-8">
          Conheça a trajetória do nosso candidato
        </h2>
        <Timeline />
      </Content>
    </Layout>
  )
}

export default TrajetoriaPage

