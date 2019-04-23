import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/Layout";
import Link from "../components/Link";
import Container from "components/Container";
import Hero from "components/Hero";
import PostCard from "components/PostCard";
import theme from "../../config/theme";

export default function Index({ data: { site, allMdx } }) {
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
        oss contribution
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
  }
`;
