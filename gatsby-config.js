module.exports = {
  pathPrefix: "/personal-website",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gavin Ryder's Personal Website",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-funk",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
  ],
};
