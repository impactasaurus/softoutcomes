module.exports = {
  siteMetadata: {
    title: `Soft outcomes`,
    description: `A catalogue of questionnaires suited to capturing soft outcomes`,
    author: `@impactasaurus`,
    siteUrl: "https://softoutcomes.org"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/logo-filled.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SO",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "softoutcomes",
        // Url to query from
        url: "https://api.softoutcomes.org/v1/query",
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Roboto\:300,400,500,700,400italic',
          'Roboto Mono\:400,500'
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`
  ],
}
