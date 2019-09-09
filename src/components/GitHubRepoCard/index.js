import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "../Link";
import { useTheme } from "../Theming";

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
}) => {
  const theme = useTheme();

  return (
    <Link
      to={url}
      aria-label={`View ${name}`}
      target="_blank"
      css={css`
        text-decoration: none !important;
      `}
    >
      <div
        css={{
          marginBottom: "40px",
          padding: "10px 20px 10px 20px",
          boxShadow: `0 1px 2px  ${theme.colors.text}`,
          borderRadius: "5px",
          cursor: "pointer",
          ":hover": {
            transform: "scale(1.02)"
          },
          color: theme.colors.text,
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.27)",
          transition: "all 0.3s ease 0s",
          backgroundColor: theme.colors.cardBg
        }}
      >
        <RepoName>
          <Project /> {name}
        </RepoName>

        <Description>{description}</Description>
        <div
          css={css`
            color: ${theme.colors.text};
            font-size: 16px;
            margin-top: 20px;
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
    </Link>
  );
};
