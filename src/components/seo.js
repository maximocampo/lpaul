/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import {Accordion} from "react-bootstrap";

function SEO({ description = '', lang = '', meta = {}, title = '' }) {
  //const { site } = useStaticQuery(
  //  graphql`
  //      query {
  //          site {
  //              siteMetadata {
  //                  title
  //                  description
  //                  author
  //              }
  //          }
  //      }
  //  `
  //)
  
  //const metaDescription = description || site.siteMetadata.description
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
