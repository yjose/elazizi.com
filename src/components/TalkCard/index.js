import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "../../components/Link";
import Img from "gatsby-image";

import { rhythm } from "../../lib/typography";
import theme from "../../../config/theme";

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

export default ({ talk }) => (
  <Link
    to={talk.frontmatter.url}
    aria-label={`View ${talk.frontmatter.title}`}
    target="_blank"
  >
    <Card>
      <Img sizes={talk.frontmatter.banner.childImageSharp.fluid} />
      <div
        css={css`
          background: white;
          padding: 0px 20px 10px 20px;
        `}
      >
        {" "}
        <TalkTitle>{talk.frontmatter.title}</TalkTitle>
        <div
          css={css`
            color: grey;
            font-size: 16px;
            margin-top: 20px;
            background: white;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <span> {talk.frontmatter.date}</span>
          <span> {talk.frontmatter.place}</span>
        </div>
      </div>
    </Card>
  </Link>
);

// <Link to={post.fields.slug} aria-label={`View ${talk.frontmatter.title}`}>
//       <TalkTitle>{post.frontmatter.title}</TalkTitle>
//     </Link>
