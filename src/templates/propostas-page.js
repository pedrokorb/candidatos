import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content/Content'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout'

const PropostasPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Hero
        title={post.frontmatter.title}
        imageSrc={post.frontmatter.image.childImageSharp.fluid.src}
      />
      <Content>
        <h2 className="text-3xl px-8 text-center mb-8">
          {post.frontmatter.subtitle}
        </h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}

export default PropostasPage

export const propostasPageQuery = graphql`
  query PropostasPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        subtitle
      }
    }
  }
`
