import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { bpMaxSM } from "../../lib/breakpoints";

import { useTheme } from "../Theming";
import Container from "../Container";
import Links from "./Links";
import MobileMenu from "./MobileMenu";
const image = require("../../../static/images/elazizi.jpg");

const Header = ({ siteTitle = "Youssouf", isHome }) => {
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
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            a: {
              ":hover": {
                textDecoration: "none !important",
                color: theme.colors.link,
              },
              textDecoration: "none",
              color: theme.colors.text,
            },
            ".active": {
              color: theme.colors.link,
              background: "transparent !important",
            },
            ".buy_me": {
              height: 30,
              margin: "auto",
            },
          }}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={{
              color: theme.colors.text,
              display: "flex",
              alignItems: "center",
              ".active_home": {
                color: theme.colors.text,
              },
              ":hover": {
                color: theme.colors.text,
              },
            }}
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
                margin-left: 16px;
                margin-right: 16px;
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
            <MobileMenu isHome={isHome}>
              {(close) => <Links close={close} />}
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  );
};
const ConnectedHeader = (props) => (
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
    render={(data) => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
);

export default ConnectedHeader;
