import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content/Content'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout'

// export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  // const PageContent = contentComponent || Content

  // return (
    
    // <section className="section section--gradient">
    //   <div className="container">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <div className="section">
    //           <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
    //             {title}
    //           </h2>
    //           <PageContent className="content" content={content} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
//   )
// }

// AboutPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// }

export const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      {/* <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      /> */}
      <>
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
      </>
    </Layout>
  )
}

// AboutPage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
