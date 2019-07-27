import React from "react";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import Link from "../components/Link";

import { rhythm } from "../lib/typography";
import { useTheme } from "./Theming";

export default React.memo(({ post, banner = false }) => {
  const theme = useTheme();

  const styles = css({
    marginBottom: "40px",
    padding: "0px",
    boxShadow: `0 1px 2px  ${theme.colors.text}`,
    borderRadius: "5px",
    cursor: "pointer",
    ":hover": {
      transform: "scale(1.02)"
    },
    color: theme.colors.text,
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.27)",
    transition: "all 0.3s ease 0s",
    background: theme.colors.cardBg
  });

  return (
    <Link
      to={"/" + post.fields.slug}
      aria-label={`View ${post.frontmatter.title}`}
      css={css`
        text-decoration: none !important;
        color: ${theme.colors.text} !important;
      `}
    >
      <div css={styles}>
        {banner && (
          <Img sizes={post.frontmatter.banner.childImageSharp.fluid} />
        )}
        <div
          css={css`
            padding: 10px 20px 10px 20px;
            background: transparent;
          `}
        >
          <h2
            css={css`
              margin-bottom: ${rhythm(0.3)};
            `}
          >
            {post.frontmatter.title}
          </h2>
          <p
            css={css`
              margin-top: 10px;
              margin-bottom: 10px;
              display: inline-block;
            `}
          >
            {post.excerpt}
          </p>
          <span />
        </div>
      </div>
    </Link>
  );
});
