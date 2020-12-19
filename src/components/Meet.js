import React from "react";
import { css } from "@emotion/react";
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
  margin-right: 10px;
`;

const Meet = () => (
  <div
    css={css`
      margin-top: ${rhythm(1)};
      display: flex;
      flex-direction: row;
    `}
  >
    <Avatar src={image} />
    <div
      css={css`
        margin-top: 0;
        text-align: center;
        flex: 1;
        text-align: left;
        padding-left: 1rem;
      `}
    >
      <p>
        👋 Hey, I am Youssouf, a Javascript engineer worked on maintaining +10
        million downloads open-source package, My posts have had over 300k read
        in the past years.
        <br />
        <b>
          {" "}
          if you are interested in a 30min 1:1 discussion about Javascript,
          React or React Native,{" "}
          <a href="https://calendly.com/yjose/meet" target="_blank">
            Make sure to reserve your seat.
          </a>
        </b>
      </p>
    </div>

    <hr
      css={css`
        margin: 50px 0;
      `}
    />
  </div>
);

export default withTheme(Meet);
