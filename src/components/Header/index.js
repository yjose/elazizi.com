import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { bpMaxSM } from "../../lib/breakpoints";

import { useTheme } from "../Theming";
import Container from "../Container";
import Links from "./Links";
import MobileMenu from "./MobileMenu";
const image = require("../../../static/images/elazizi.png");

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
                text-decoration: none;
                color: ${theme.colors.white};
                margin-left: 16px;
                margin-right: 16px;
              }
              .active {
                display: none;
                visibility: hidden;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
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
