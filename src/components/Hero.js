import React from "react";

import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Container from "components/Container";
import { rhythm } from "../lib/typography";
import theme from "../../config/theme";
import { Twitter, GitHub, LinkedIn } from "./Social";

const image = require("../../static/images/elazizi.png");
const Avatar = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 80px;
  border: 4px solid #fff;
  /* -webkit-filter: grayscale(100%);
  filter: grayscale(100%); */
  margin: auto;
`;
const Hero = () => (
  <section
    css={css`
      * {
        color: ${theme.colors.white};
      }
      z-index: 2;
      width: 100%;
      background: ${theme.brand.primary};
      padding: 30px 0 30px 0;
      display: flex;
      margin-top: -80px;

      background-image: linear-gradient(
        179.3deg,
        rgba(80, 161, 252, 1) 0.3%,
        rgba(1, 98, 203, 1) 96.9%
      );
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap-reverse;
        `}
      >
        <div
          css={css`
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: flex-end;
            `}
          >
            <span
              css={css`
                font-size: 80px;
              `}
            >
              👋
            </span>
            <h3
              css={css`
                padding: 15px;
              `}
            >
              <span> </span>Hello, I'm Youssouf! <br />{" "}
            </h3>
          </div>
          A Human first 🙌, Full Stack Web Developer 👨🏻‍💻 and OSS believer. I love
          working with react and ReactNative and I admire writing about my
          programming journey 👇👇👇
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin: 30px auto;
            margin-bottom: 0px;
          `}
        >
          <Avatar src={image} />
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              margin-top: 20px;
            `}
          >
            <Twitter height={36} width={28} />
            <LinkedIn height={30} width={30} />
            <GitHub height={30} width={30} />
          </div>
        </div>
      </div>
    </Container>
    <div
      css={css`
        height: 150px;
        overflow: hidden;
      `}
    />
  </section>
);

export default Hero;
