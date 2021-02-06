require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Rasin Ansar`,
    siteUrl: `https://rasinansar.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `I am Rasin Ansar, the coolest guy`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        // url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/rasinansar`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/rasinansar`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: false,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
