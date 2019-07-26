import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Container from "components/Container";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Link from "../components/Link";

const Blog = ({
  data: { site, allMdx },
  pageContext: { pagination, categories }
}) => {
  const { page, nextPagePath, previousPagePath } = pagination;

  const posts = page
    .map(id =>
      allMdx.edges.find(
        edge =>
          edge.node.id === id && edge.node.parent.sourceInstanceName !== "pages"
      )
    )
    .filter(post => post !== undefined);

  return (
    <Layout site={site}>
      <SEO />
      <Container
        noVerticalPadding
        css={css`
          padding-top: 40px;
          a,
          p {
          }
          h2 {
            a {
              color: inherit;
            }
          }
          small {
            display: block;
          }
        `}
      >
        {posts.map(({ node: post }) => (
          <PostCard
            key={post.id}
            post={post}
            banner={post.frontmatter.banner}
          />
        ))}
        <div
          css={css`
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
          `}
        >
          {!previousPagePath ? (
            <div />
          ) : (
            <Link to={previousPagePath} aria-label="View previous page">
              ← Previous Page
            </Link>
          )}
          {!nextPagePath ? (
            <div />
          ) : (
            <Link to={nextPagePath} aria-label="View next page">
              Next Page →
            </Link>
          )}
        </div>
        <hr
          css={css`
            margin: 50px 0;
          `}
        />
      </Container>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }

            keywords
          }
        }
      }
    }
  }
`;
