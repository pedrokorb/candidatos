import React from 'react'
import { graphql } from 'gatsby'

import Timeline from '../components/OptionalTimeline/Timeline'
import Content from '../components/Content/Content'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout'

const TrajetoriaPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Hero
        imageSrc={post.frontmatter.image.childImageSharp.fluid.src}
        title={post.frontmatter.title}
      />
      <Content>
        <h2 className="text-3xl px-8 text-center mb-8">
          {post.frontmatter.subtitle}
        </h2>
        <Timeline 
          events={post.frontmatter.eventos}
        />
      </Content>
    </Layout>
  )
}

export default TrajetoriaPage

export const trajetoriaPageQuery = graphql`
  query TrajetoriaPage($id: String!) {
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
        eventos {
          title
          local
          description
          date
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
        }
      }
    }
  }
`