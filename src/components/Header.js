import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import theme from "../../config/theme";
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

const Header = ({
  dark,
  bgColor = "none",
  siteTitle,
  headerColor = "black",
  hoverColor = theme.colors.link_color_hover
}) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 20px 0 20px 0;
      background: transparent;
      z-index: 3;
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${headerColor};
          a {
            color:   ${headerColor};
            /* ${dark ? "#fbfbfb" : "rgba(0,0,0,0.85)"}; */
            text-decoration: none;
          }
          a:hover {
            color: ${hoverColor};
          }
          background: transparent;
          .active_home {
            visibility: hidden;
          }
        `}
      >
        <Link
          to="/"
          aria-label="go to homepage"
          css={css`
            display: flex;
            align-items: center;
          `}
          activeClassName="active_home"
        >
          <Avatar src={image} />
          Youssouf
        </Link>
        <div
          css={css`
            font-size: 16px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            a {
              /* color: ${dark ? "#fbfbfb" : "rgba(0,0,0,0.85)"}; */
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
          <Link to="/blog" activeClassName="active" aria-label="View blog page">
            Blog
          </Link>
          <Link
            to="/talks"
            activeClassName="active"
            aria-label="View blog page"
          >
            Talks
          </Link>
          <Link to="/oss" activeClassName="active" aria-label="View blog page">
            Oss
          </Link>
        </div>
      </nav>
    </Container>
  </header>
);

export default Header;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
