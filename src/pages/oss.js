import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/Layout";
import Link from "../components/Link";
import Container from "components/Container";
import Hero from "components/Hero";
import GitHubRepoCard from "components/GitHubRepoCard";
import theme from "../../config/theme";

export default function Index({ data: { site, github } }) {
  const GithubRepos = github.viewer.repositories.edges
    .map(({ node }) => {
      const l = node.languages.edges.reduce((tmp, { node }, idx, arr) => {
        return tmp + node.name + (idx < arr.length - 1 ? "," : "");
      }, "");
      return { ...node, languages: l };
    })
    .filter(
      p => p.nameWithOwner.includes("yjose") && p.stargazers.totalCount > 2
    )
    .sort((a, b) => b.stargazers.totalCount - a.stargazers.totalCount);
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
      noSubscribeForm
    >
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {GithubRepos.map(project => (
          <GitHubRepoCard project={project} key={project.id} />
        ))}
        <hr />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

    github {
      viewer {
        repositories(first: 100, isFork: false) {
          edges {
            node {
              id
              name
              isFork
              description
              isPrivate
              languages(first: 2) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
              forkCount
              nameWithOwner
              owner {
                id
              }
              homepageUrl
              url
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
