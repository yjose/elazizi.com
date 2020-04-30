import React from "react";
import { css } from "@emotion/core";
import { bpMaxSM } from "../lib/breakpoints";
import { useTheme } from "./Theming";

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

export const ShareButtons = ({ url, title, twitterHandle, size = 32 }) => {
  return (
    <>
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split("@").join("")}
      >
        <TwitterIcon size={size} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        quote={title}
        via={twitterHandle.split("@").join("")}
      >
        <LinkedinIcon size={size} round={true} />
      </LinkedinShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split("@").join("")}
      >
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>
    </>
  );
};

export const HorizontalShare = (props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100px;
        margin-left: -150px;
        position: sticky;
        top: 50vh;
        text-align: center;
        margin-bottom: -200px;
        span {
          font-size: 70%;
          text-transform: uppercase;
          line-height: 2.5;
          opacity: 0.7;
        }
        button {
          cursor: pointer;
          margin-bottom: 10px;
        }
      `}
    >
      <span>Share </span>
      <ShareButtons {...props} size={40} />
    </div>
  );
};

const Share = (props) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        div {
          margin-right: 20px;
          cursor: pointer;
          :hover {
            color: ${theme.colors.primary};
          }
        }
        span {
          font-size: 70%;
          text-transform: uppercase;
          line-height: 2.5;
          opacity: 0.7;
        }
        button {
          cursor: pointer;
          margin-left: 10px;
        }
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          border-top: 1px solid ${theme.colors.gray};
        `}
      />
      <span>Share article </span>
      <span
        css={css`
          font-size: 30px !important;
          margin-right: 15px;
          margin-left: 5px;
        `}
      >
        👉
      </span>
      <ShareButtons {...props} />
    </div>
  );
};

export default Share;
