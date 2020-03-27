import React from "react";
import { css } from "@emotion/core";
import { withTheme } from "./Theming";
import { rhythm } from "../lib/typography";
import { bpMaxSM } from "../lib/breakpoints";

const SignUp = ({ theme, description = true }) => (
  <div>
    {description && (
      <h4
        css={css`
          margin-bottom: ${rhythm(1)};
          margin-top: 0;
        `}
      >
        Liked this article? Make sure to join my Newsletter.
      </h4>
    )}

    <form
      css={css`
        display: flex;
        align-items: flex-end;

        button {
          margin-left: 10px;
        }
        .field-error {
          display: block;
          color: ${theme.colors.red};
          font-size: 80%;
        }
        input,
        label {
          width: 100%;
        }
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
          }
          button {
            margin: 20px 0 0 0;
          }
        }
      `}
      action="https://tinyletter.com/yjose"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/yjose', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <label
        htmlFor="tlemail"
        css={css`
          margin-left: 10px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          `}
        >
          Email:
        </div>
        <input type="text" name="email" id="tlemail" />
      </label>
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

export default withTheme(SignUp);
