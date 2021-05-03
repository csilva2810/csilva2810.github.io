/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Carlos Silva's Blog`,
    description: `Carlos Silva's Blog home page`,
    author: `carlossilva`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carlos Silva's Blog`,
        short_name: `Carlos' Blog`,
        start_url: `/`,
        background_color: `#00cba9`,
        theme_color: `#00cba9`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
