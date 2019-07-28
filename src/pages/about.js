import React, { useContext } from "react";
import { css } from "@emotion/core";
import Layout from "../components/Layout";

import Container from "components/Container";
import { Twitter, GitHub, LinkedIn } from "components/Social";
import { OneSignalContext } from "../components/OneSignal";
import { bpMaxSM } from "../lib/breakpoints";
const isBrowser = typeof window !== "undefined";

export default ({ data: { site } }) => {
  return (
    <Layout site={site}>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <div
          css={css`
            margin-bottom: 60px;
          `}
        >
          <h1
            css={css`
              text-align: center;
            `}
          >
            Youssouf EL Azizi
          </h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            I really like writing code.
            <br />
            Especially in Javascript and React.
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-top: 20px;
            `}
          >
            <Twitter height={36} width={28} />
            <LinkedIn height={30} width={30} />
            <GitHub height={30} width={30} />
          </div>

          <br />
          <br />
          <p>
            I'm a full-stack engineer and mobile tribe lead at{" "}
            <a href="https://obytes.com/" target="_blank">
              Obytes
            </a>
            . Currently working with{" "}
            <a href="https://www.barmej.com/" target="_blank">
              Barmej
            </a>{" "}
            team and helping my team produce good quality Apps. <br />
            <br />
            I blog from time to time about my journey as a developer. My blog
            posts have had over 200k reads and have been featured on Dev’s top
            7, Medium top 20 recommended stories. <br />
            <br />
            I'm actively involved in the open source community as a maintainer
            and contributor. Maintaining a{" "}
            <a href="https://react-popup.elazizi.com/" target="_blank">
              5M downloads react component package
            </a>{" "}
            and submitting some PRs to projects I usually use such us
            react-native and Gatsbyjs. <br />
            <br />
            I'm also a{" "}
            <a
              href="https://www.facebook.com/groups/DevC.Casablanca/"
              target="_blank"
            >
              DevC Casablanca
            </a>{" "}
            core team member, I do my best for that as well as sharing my
            knowledge and helping on events organization.
            <br />
            <br />
            When I am not coding you can find me playing football or having fun
            with friends.
            <br />
            <br />
          </p>
          <p>
            The best way to contact me for a quick question is on my{" "}
            <a href="https://twitter.com/ElaziziYoussouf" target="_blank">
              Twitter page
            </a>{" "}
            <br />
            <br />
            Feel free to reach out to me for speaking inquiries, blog
            partnerships, or if you have questions or comments feel free to
            email me at{" "}
            <a href="mailto:youssoufelazizi@gmail.com">
              youssoufelazizi@gmail.com
            </a>{" "}
            <br />
            <br />
            To get updates from me, Make sure to follow me on{" "}
            <a href="https://twitter.com/ElaziziYoussouf" target="_blank">
              Twitter
            </a>{" "}
            or by clicking the button 👇 to enable new blog posts notifications
            <br />
          </p>
          <SubscribeSection />
        </div>
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

const SubscribeSection = () => {
  const { isSubscribed, subscribe, loading } = isBrowser
    ? useContext(OneSignalContext)
    : {};
  if (isSubscribed && !loading) return null;

  return (
    <div
      css={css`
        padding: 30px;
        ${bpMaxSM} {
          padding: 0;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
      `}
    >
      <button onClick={subscribe}> SUBSCRIBE TO UPDATES {isSubscribed} </button>
    </div>
  );
};
