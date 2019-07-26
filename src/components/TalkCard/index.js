import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "../../components/Link";
import Img from "gatsby-image";

import { rhythm } from "../../lib/typography";
import theme from "../../../config/theme";
import { useTheme } from "../Theming";

const TalkTitle = styled.h2`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
`;

const Card = styled.div`
  margin-bottom: 40px;
  background: white;
  padding: 0px 0px 0px 0px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);
    transition: ${theme.transition.ease};
  }
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
`;

export default ({ talk }) => {
  const theme = useTheme();
  const dark = theme.themeName === "dark";

  return (
    <Link
      to={talk.frontmatter.url}
      aria-label={`View ${talk.frontmatter.title}`}
      target="_blank"
      css={css`
        text-decoration: none !important;
      `}
    >
      <div
        css={css`
          margin-bottom: 40px;
          padding: 0px 0px 0px 0px;
          box-shadow: 0 1px 2px ${theme.colors.text};
          border-radius: 5px;
          cursor: pointer;
          :hover {
            /* box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px,
              rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
              rgba(0, 0, 0, 0.12) 0px 3px 1px -2px; */
            transform: scale(1.02);
          }
          color: ${theme.colors.text};
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);

          transition: all 0.3s ease 0s;
          background: ${dark ? "rgb(43, 42, 42)" : theme.colors.white};
        `}
      >
        <Img sizes={talk.frontmatter.banner.childImageSharp.fluid} />
        <div
          css={css`
            padding: 0px 20px 10px 20px;
          `}
        >
          {" "}
          <TalkTitle>{talk.frontmatter.title}</TalkTitle>
          <div
            css={css`
              font-size: 16px;
              margin-top: 20px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            <span> {talk.frontmatter.date}</span>
            <span> {talk.frontmatter.place}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// <Link to={post.fields.slug} aria-label={`View ${talk.frontmatter.title}`}>
//       <TalkTitle>{post.frontmatter.title}</TalkTitle>
//     </Link>
