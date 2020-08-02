import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content/Content'
import Timeline from '../components/Timeline/Timeline'

const TrajetoriaPage = () => {

  return (
    <Layout>
      <Hero
        titulo="Trajetória"
      />
      <Content>
        <Timeline />
      </Content>
    </Layout>
  )
}

export default TrajetoriaPage

