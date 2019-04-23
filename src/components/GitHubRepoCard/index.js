import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "../Link";

import { rhythm } from "../../lib/typography";
import theme from "../../../config/theme";
import { Star, Project, Fork } from "./icons";

const RepoName = styled.h2`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
`;

export default ({
  project: {
    url,
    name,
    description,
    forkCount,
    languages,
    stargazers: { totalCount: stars }
  }
}) => (
  <div
    css={css`
      margin-bottom: 40px;
      background: white;
      padding: 10px 20px 10px 20px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
      border-radius: 5px;
      cursor: pointer;
      :hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);
        transition: ${theme.transition.ease};
      }
    `}
  >
    <Link to={url} aria-label={`View ${name}`} target="_blank">
      <RepoName>
        <Project /> {name}
      </RepoName>
    </Link>
    <Description>{description}</Description>
    <div
      css={css`
        color: grey;
        font-size: 16px;
        margin-top: 20px;
        background: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <span> {languages}</span>
      <span>
        <span>
          <Star />
          {stars}
        </span>
        <span
          css={css`
            margin-left: 15px;
          `}
        >
          <Fork /> {forkCount}
        </span>
      </span>
    </div>
    <span />
  </div>
);
