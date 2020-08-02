import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content/Content'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout'

const ProjetosPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Hero
        title="Projetos"
      />
      {console.log(post.frontmatter)}
      <Content>
        <p>Olá</p>
      </Content>
    </Layout>
  )
}

export default ProjetosPage

export const projetosPageQuery = graphql`
  query ProjetosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`

