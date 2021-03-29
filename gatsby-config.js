/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-jss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `waxiwo`,
        short_name: `waxiwo`,
        start_url: `/`,
        icon: `src/hand.svg`, // This path is relative to the root of the site.
      },
    }
  ],
  siteMetadata: {
    title: "WAXIWO",
    author: "Maximo Campo",
  },
  
};
