import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content/Content'

const ExamplePage = () => {

  return (
    <Layout>
      <Hero
        title="Página de exemplo"
      />
      <Content>
        <p>Olá</p>
      </Content>
    </Layout>
  )
}

export default ExamplePage

