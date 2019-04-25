import React from "react";
import { css } from "@emotion/core";
import { bpMaxSM } from "../lib/breakpoints";
import SubscribeForm from "./Forms/Subscribe";
import theme from "../../config/theme";

import { Twitter, GitHub, LinkedIn } from "./Social";
import Container from "./Container";

const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      {false && (
        <div>
          <SubscribeForm />
          <br />
          <br />
        </div>
      )}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div
          css={css`
            cursor: pointer;
            :hover {
              color: ${theme.brand.primary};
            }
          `}
        >
          <LinkedIn />
          <Twitter />
          <GitHub />
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
