import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import Link from "../components/Link";

import { rhythm } from "../lib/typography";
import { useTheme } from "./Theming";

const PostTitle = styled.h2`
  margin-bottom: ${rhythm(0.3)};
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
`;

export default ({ post, banner = false }) => {
  console.log(post);

  const theme = useTheme();
  const dark = theme.themeName === "dark";

  return (
    <Link
      to={post.fields.slug}
      aria-label={`View ${post.frontmatter.title}`}
      css={css`
        text-decoration: none !important;
      `}
    >
      <div
        css={css`
          margin-bottom: 40px;
          padding: 0px;
          box-shadow: 0 1px 2px ${theme.colors.text};
          border-radius: 5px;
          cursor: pointer;
          :hover {
            transform: scale(1.02);
          }
          color: ${theme.colors.text};
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);

          transition: all 0.3s ease 0s;
          background: ${dark ? "rgb(43, 42, 42)" : theme.colors.white};
        `}
      >
        {banner && (
          <Img sizes={post.frontmatter.banner.childImageSharp.fluid} />
        )}
        <div
          css={css`
            padding: 10px 20px 10px 20px;
          `}
        >
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <Description>{post.excerpt}</Description>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              padding: 10px;
            `}
          />
          <span />
        </div>
      </div>
    </Link>
  );
};
