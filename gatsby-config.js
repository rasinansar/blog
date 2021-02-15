require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Technology, E-commerce, and Entrepreneurship | Rasin Ansar`,
    name: `Rasin Ansar`,
    siteUrl: `https://rasinansar.com`,
    description: `This is my personal blog, where I write about things related to e-commerce, technology, entrepreneurship, and everything in between`,
    hero: {
      heading: `Hey, I am <a href=#>Rasin Ansar</a>, I write about technology, ecommerce, and everything in between`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/rasinansar`,
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
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
        name: `Rasin Ansar's Personal Blog`,
        short_name: `Rasin`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-9L4DNKZXKE`
      }
    }
  ],
};
