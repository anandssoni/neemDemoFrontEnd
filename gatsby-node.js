const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog-detail.js");
  const res = await graphql(`
  query BlogQuery {
    allSanityPost {
      edges {
        node {
          categories {
            description
            slug {
              current
            }
            title
            image {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
  
  `);

  if (res.errors) throw res.errors;
  // Create blog post pages
  res.data.allSanityPost.edges[0].node.categories
    .forEach((edge, index) => {
      createPage({
        component: blogTemplate,
        path: `/${edge.slug.current}`,
        context: {
          blogDetails:edge
        }
      });
    });
};
