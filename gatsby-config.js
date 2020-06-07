/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  {
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: 'ygms4j45',
      dataset: 'production',

      // a token with read permissions is required
      // if you have a private dataset
      graphqlTag: "default",
      watchMode: true
    },
  },
  `gatsby-theme-material-ui`
],
}
