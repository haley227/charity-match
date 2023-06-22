const metadata = {
  name: 'Cro Metrics Landing Page',
  description: `Cro Metrics Landing Page`,
  start_url: '/',
  icon: 'src/images/favicon.png',
};
// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: metadata,
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       'G-VHKGTDRGNH', // Google Analytics / GA
    //       'UA-37339465-1',
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     // gtagConfig: {
    //     //   optimize_id: "OPT_CONTAINER_ID",
    //     //   anonymize_ip: true,
    //     //   cookie_expires: 0,
    //     // },
    //     // This object is used for configuration specific to this plugin
    //     // pluginConfig: {
    //     //   // Avoids sending pageview hits from custom paths
    //     //   exclude: ["/preview/**"],
    //     // },
    //   },
    // },
    // {
    //   resolve: `@crometrics/gatsby-plugin-optimizely-js`,
    //   options: {
    //     optimizelyId: '3164220185',
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: metadata,
    },
  ],
};
