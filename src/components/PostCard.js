import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "../components/Link";

import { rhythm } from "../lib/typography";
import theme from "../../config/theme";

const PostTitle = styled.h2`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
`;

export default ({ post }) => (
  <div
    css={css`
      margin-bottom: 40px;
      background: white;
      padding: 10px 20px 10px 20px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
      border-radius: 5px;
    `}
  >
    <Link to={post.fields.slug} aria-label={`View ${post.frontmatter.title}`}>
      <PostTitle>{post.frontmatter.title}</PostTitle>
    </Link>

    <Description>{post.excerpt}</Description>
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
        padding: 10px;
      `}
    >
      <Link to={post.fields.slug} aria-label={`View ${post.frontmatter.title}`}>
        Read Article →
      </Link>
    </div>
    <span />
  </div>
);
