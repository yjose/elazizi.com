import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { useTheme } from "./Theming";
import ThemeToggler from "./ThemeToggler";

import Container from "./Container";

const image = require("../../static/images/elazizi.png");

const Avatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  border: 2px solid #fff;
  /* -webkit-filter: grayscale(100%);
  filter: grayscale(100%); */
  margin: auto;
  margin-right: 5px;
`;

const Header = ({ siteTitle = "Youssouf" }) => {
  const theme = useTheme();
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 20px 0 20px 0;
        background: "transparent";
        z-index: 3;
        a {
          color: ${theme.colors.text};
          text-decoration: none;
        }
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: ${theme.colors.text};
              display: flex;
              align-items: center;
            `}
            activeClassName="active_home"
          >
            👨🏻‍💻 Youssouf
          </Link>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                color: ${theme.colors.text};
                text-decoration: none;
                & + a {
                  margin-left: 32px;
                }
              }
              .active {
                visibility: visible;
              }
            `}
          >
            <Link
              to="/blog"
              activeClassName="active"
              aria-label="View blog page"
            >
              Blog
            </Link>
            <Link
              to="/talks"
              activeClassName="active"
              aria-label="View blog page"
            >
              Talks
            </Link>
            <Link
              to="/oss"
              activeClassName="active"
              aria-label="View blog page"
            >
              Oss
            </Link>

            <ThemeToggler
              toggleTheme={theme.toggleTheme}
              themeName={theme.themeName}
            />
          </div>
        </nav>
      </Container>
    </header>
  );
};
const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
);

export default ConnectedHeader;
