import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { withTheme } from "./Theming";
import { rhythm } from "../lib/typography";

const HireMe = () => (
  <div
    css={css`
      margin-top: ${rhythm(1)};
      display: flex;
      flex-direction: row;
    `}
  >
    <div
      css={css`
        margin-top: 0;
        text-align: center;
        flex: 1;
        text-align: left;
      `}
    >
      <h1> Hire Me !</h1>
      <p>
        👋 Hey, if you search for a reputable react-native developer with more
        than four years of building mobile applications to produce top-quality
        Applications, you are in the right place;{" "}
        <a href="mailto:youssoufelazizi@gmail.com" target="_blank">
          Get in touch
        </a>{" "}
        to discuss your needs now!
        <br />
      </p>

      <h3> How i can help you?</h3>
      <ul>
        <li>
          Building your next mobile application using react native best
          practices with performance in mind
        </li>
        <li>
          Provide consulting and code review for your team to help them build
          clean and mobile preferment application
        </li>
        <li>
          Investigate on application's performance and issues and help you fix
          them and optimize application performance.
        </li>
      </ul>
    </div>

    <hr
      css={css`
        margin: 50px 0;
      `}
    />
  </div>
);

export default withTheme(HireMe);
