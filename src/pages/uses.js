import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import Layout from "../components/Layout";

import Container from "components/Container";

export default ({ data: { site } }) => {
  return (
    <Layout site={site}>
      <Container
        css={css`
          padding-bottom: 0;
          h3 {
            margin-top: 3rem;
          }
        `}
      >
        <article>
          <div>
            <h3>👨‍💻 Programming</h3>
            <ul>
              <li>💛 TypeScript / JavaScript</li>

              <li>💙 React Js | Native</li>

              <li>💚 IOS / Android</li>

              <li>💚 Node Js</li>

              <li>❤️ GraphQL</li>

              <li>🖤 Next Js</li>

              <li>💜 Gatsby</li>
            </ul>

            <h3>🔨 Editor &amp; Console</h3>
            <ul>
              <li>
                My favorite editor is 
                <a href="https://code.visualstudio.com/">VS Code</a> with the 
                <a href="https://github.com/wesbos/cobalt2-vscode">
                  Cobalt 2 theme
                </a>
                .
              </li>
              <li>
                My terminal is 
                <a href="https://ohmyz.sh/">
                  <strong>ohmyzsh</strong>
                </a>
                 and my font is 
                <a href="https://github.com/tonsky/FiraCode">
                  <strong>Fira Code</strong>
                </a>
                 with ligatures enabled.
              </li>
            </ul>

            <h3>📊 Apps &amp; Productivity</h3>
            <ul>
              <li>
                I use <a href="https://ticktick.com/">Ticktick</a> to keep track
                of my tasks and daily habits.
              </li>

              <li>
                I use <a href="https://slack.com/">slack</a> always to
                communicate with my colleagues.
              </li>

              <li>
                <a href="https://notion.so/">Notion</a> is another note-taking
                and journaling tool
              </li>
              <li>
                <a href="https://www.grammarly.com/">Grammarly</a> premium
                account to help me improve my English writing.
              </li>
              <li>
                <a href="https://www.storytel.com/">Storytel</a> to listen to
                audiobooks.
              </li>
              <li>
                I use <a href="https://yarnpkg.com/">yarn</a> as my package
                manager.
              </li>
            </ul>
            <h3>🖥️ Desk Setup &amp; Equipment</h3>
            <ul>
              <li>My laptop is a Macbook Pro 16 2018</li>
              <li>My monitor is the Samsung LC32F391FWU 32&quot; LED Curved</li>
              <li>My phone is  iPhone 13</li>

              <li>
                I use the  
                <a href="https://www.amazon.com/Apple-Magic-Mouse-Wireless-Rechargable/dp/B07BR94PPD/">
                  apple magic mouse 2
                </a>{" "}
                &amp;{" "}
                <a href="https://www.amazon.com/Apple-Wireless-Keyboard-Silver-MLA22LL/dp/B01NABDNPH/">
                  apple Magic Keyboard 2
                </a>
              </li>
              <li>
                I use 
                <a href="https://www.amazon.com/Kindle-Now-with-Built-in-Front-Light/dp/B07978J597">
                  kindle
                </a>
                to read books
              </li>
              <li>
                I use{" "}
                <a href="https://www.mi.com/global/product/mi-smart-band-6/">
                  Mi Band 6
                </a>
              </li>
            </ul>
          </div>
        </article>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`;
