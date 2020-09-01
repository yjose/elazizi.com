import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { withTheme } from "./Theming";
import { rhythm } from "../lib/typography";
import { bpMaxSM } from "../lib/breakpoints";

const image = require("../../static/images/elazizi.jpg");
const Avatar = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 80px;
  border: 4px solid #fff;
  /* -webkit-filter: grayscale(100%);
  filter: grayscale(100%); */
  margin: auto;
`;

const Subscribe = ({ theme, description = true }) => (
  <div
    css={css`
      margin-top: ${rhythm(1)};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      justify-items: center;
    `}
  >
    {description && (
      <div
        css={css`
          margin-top: 0;
          text-align: center;
        `}
      >
        <h2
          css={css`
            margin-top: 0px;
          `}
        >
          Get updates via email
        </h2>
        <p> JavaScript, React, React Native and web thoughts</p>
      </div>
    )}

    <form
      css={css`
        display: flex;
        align-items: flex-end;
        .field-error {
          display: block;
          color: ${theme.colors.red};
          font-size: 80%;
        }
        input {
          border-radius: 4px 0px 0px 4px;
          ${bpMaxSM} {
            flex-direction: column;
            align-items: flex-start;
            width: auto;
            label,
            input {
              margin: 5px 0 0 0 !important;
              width: 100%;
              display: flex;
              flex-direction: column;
              font-size: 10%;
            }
          }
        }

        button {
          margin: 0px;
          border-radius: 0px 4px 4px 0px;
        }
      `}
      action="https://tinyletter.com/yjose"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/yjose', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <input
        type="text"
        name="email"
        placeholder="Type your email"
        id="tlemail"
      />

      <input type="hidden" value="1" name="embed" />
      <button data-element="submit" type="submit">
        Subscribe
      </button>
    </form>
    <hr
      css={css`
        margin: 50px 0;
      `}
    />
  </div>
);

export default withTheme(Subscribe);
