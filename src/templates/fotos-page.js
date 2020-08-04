import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content/Content'
import Gallery from '../components/Gallery/Gallery'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout'

const FotosPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Hero
        imageSrc={post.frontmatter.image.childImageSharp.fluid.src}
        title={post.frontmatter.title}
      />
      <Content>
        <h2 
          className="text-3xl px-8 text-center mb-8"
        >
          {post.frontmatter.subtitle}
        </h2>
        <Gallery 
          images={post.frontmatter.fotos}
        />
      </Content>
    </Layout>
  )
}

export default FotosPage

export const fotosPageQuery = graphql`
  query FotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        fotos {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`