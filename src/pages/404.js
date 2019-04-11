import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/Layout";
import Link from "../components/Link";
import Container from "components/Container";
import Hero from "components/Hero";
import theme from "../../config/theme";

export default ({ data: { site } }) => {
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
        <div
          css={css`
            margin-bottom: 60px;
          `}
        >
          <h1>NOT FOUND</h1>
          <p>
            {" "}
            You just hit a route that doesn't exist... the sadness.{" "}
            <span
              css={css`
                font-size: 40px;
              `}
            >
              🤔
            </span>{" "}
          </p>
          <Link
            to="/"
            aria-label="Visit blog page"
            className="button-secondary"
          >
            Home Page
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

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
