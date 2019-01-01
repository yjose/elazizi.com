import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article, Wrapper, Button, SectionTitle } from 'components';
import { media } from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 0.5rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`;


const SocialMediaLinks = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    `
const SocialMediaIcon = styled.img`
	padding: 10px;
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: postEdges },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>Hi.</h1>
        <p>
          I&apos;m Youssouf, Human first 🙌 | Full stack web developer | ⚡️ Reactjs⚡️

        </p>
        <SocialMediaLinks>
            <a target="_blank" href="https://medium.com/@yjose">
            <SocialMediaIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM+SURBVGhD7dlJyE1hHMfxax6SeSgkFkqmZEwkK0oURaLsLFhYKAsWlCxEFiyIkp2ShAyhUFIiSSgLKYkMReYx0/f33vPo6el/7xnuOeduzq8+ve89w3Pe3/t273nO89aqVKlSpUrKdI2+5p4zOI1ZHa+KSzdcxk8cxmjklj746zmP6Sgim+Ff6wcOYRRaTj/4g8sf6K80FXlFP+xnhNcSFdqPkcgcq4ijQqcwGa3mJKxr+L5jH4YjdZoVcVToBCYiSxbBGreRr9iLYUicJEWc3ziG8UianngMa7w4X7AHQxGbNEUcFTqIJNkOa4w0PmEZmiZLEXmKuIzFN1jnp/EBI9A0RRa5AOvctDYiNkUVWQ7rvLTuIdFMoNUigxFeSDfZZ7DOS0OflnOgjIm+NkyrRSZhbf3b/9kN65y0jkDR+0MzgKbJo8gTdO94Vb/XaC5lnZPGWwyBchxH6982Th5F9Hp9x6tabRXCY7NYB2UB9Lq0Is+hm18XPIy2ZXULndEDj6JtpRWRDdpAVsI/No1fmAZlK9z2Uou8RC/ot3k/2paWZsGKPqX8m2mpRWQTFE0p/O1JvEJ/KOfg7yu9yGvoPtIJd6JtSa2BshThvtKLyBYoixHua+QaVL43NHa4vy1FdA/oC+Umwv0h3XcmQNkJ65i2FJFtUBbC2u/TTEAZBz32Wse0rcg7DIByHdYxojmZ3lPKVVjHSOFFBkILFdYxO6DMh7VfNEtWVsPa7xRexGUGtJTkH/MRg6BYv209ryh6P71AuN9XWhGX2bgEd9wuKJqO++frZqcnSEUrJ/4+S+lFXPSDX4HWstxqyEW48/Usr0yBpiX+2Ja2FXGZB7dwMBM6V6sqmmDqvnEj2hYntogGew/r5GaSFgmjDwatcyl6ILPGtsQWUTT31xKPNUAjWYu4hyV9CLyBNbYlURFFT3ZaTdRzsjVQKGsRF11Pzx3W2JbERVy0zqt/McQVarWIi+Zjt2Fdw5e6iItW4s/CGlTyKqLofboEd2FdSzIXcbFudJJnERcV0iec1rLC67VcxCW80em3V1RUaAUewF3vAHLNXOhxVKsbRUePzPqo1kw60/9MqlSpUqVKzqnV/gGp9rz22GQhOAAAAABJRU5ErkJggg==" />
            </a>
            <a target="_blank" href="https://github.com/yjose">
            <SocialMediaIcon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE3Ljc5MSw0Ni44MzZDMTguNTAyLDQ2LjUzLDE5LDQ1LjgyMywxOSw0NXYtNS40YzAtMC4xOTcsMC4wMTYtMC40MDIsMC4wNDEtMC42MUMxOS4wMjcsMzguOTk0LDE5LjAxNCwzOC45OTcsMTksMzkgYzAsMC0zLDAtMy42LDBjLTEuNSwwLTIuOC0wLjYtMy40LTEuOGMtMC43LTEuMy0xLTMuNS0yLjgtNC43QzguOSwzMi4zLDkuMSwzMiw5LjcsMzJjMC42LDAuMSwxLjksMC45LDIuNywyYzAuOSwxLjEsMS44LDIsMy40LDIgYzIuNDg3LDAsMy44Mi0wLjEyNSw0LjYyMi0wLjU1NUMyMS4zNTYsMzQuMDU2LDIyLjY0OSwzMywyNCwzM3YtMC4wMjVjLTUuNjY4LTAuMTgyLTkuMjg5LTIuMDY2LTEwLjk3NS00Ljk3NSBjLTMuNjY1LDAuMDQyLTYuODU2LDAuNDA1LTguNjc3LDAuNzA3Yy0wLjA1OC0wLjMyNy0wLjEwOC0wLjY1Ni0wLjE1MS0wLjk4N2MxLjc5Ny0wLjI5Niw0Ljg0My0wLjY0Nyw4LjM0NS0wLjcxNCBjLTAuMTEyLTAuMjc2LTAuMjA5LTAuNTU5LTAuMjkxLTAuODQ5Yy0zLjUxMS0wLjE3OC02LjU0MS0wLjAzOS04LjE4NywwLjA5N2MtMC4wMi0wLjMzMi0wLjA0Ny0wLjY2My0wLjA1MS0wLjk5OSBjMS42NDktMC4xMzUsNC41OTctMC4yNyw4LjAxOC0wLjExMWMtMC4wNzktMC41LTAuMTMtMS4wMTEtMC4xMy0xLjU0M2MwLTEuNywwLjYtMy41LDEuNy01Yy0wLjUtMS43LTEuMi01LjMsMC4yLTYuNiBjMi43LDAsNC42LDEuMyw1LjUsMi4xQzIxLDEzLjQsMjIuOSwxMywyNSwxM3M0LDAuNCw1LjYsMS4xYzAuOS0wLjgsMi44LTIuMSw1LjUtMi4xYzEuNSwxLjQsMC43LDUsMC4yLDYuNmMxLjEsMS41LDEuNywzLjIsMS42LDUgYzAsMC40ODQtMC4wNDUsMC45NTEtMC4xMSwxLjQwOWMzLjQ5OS0wLjE3Miw2LjUyNy0wLjAzNCw4LjIwNCwwLjEwMmMtMC4wMDIsMC4zMzctMC4wMzMsMC42NjYtMC4wNTEsMC45OTkgYy0xLjY3MS0wLjEzOC00Ljc3NS0wLjI4LTguMzU5LTAuMDg5Yy0wLjA4OSwwLjMzNi0wLjE5NywwLjY2My0wLjMyNSwwLjk4YzMuNTQ2LDAuMDQ2LDYuNjY1LDAuMzg5LDguNTQ4LDAuNjg5IGMtMC4wNDMsMC4zMzItMC4wOTMsMC42NjEtMC4xNTEsMC45ODdjLTEuOTEyLTAuMzA2LTUuMTcxLTAuNjY0LTguODc5LTAuNjgyQzM1LjExMiwzMC44NzMsMzEuNTU3LDMyLjc1LDI2LDMyLjk2OVYzMyBjMi42LDAsNSwzLjksNSw2LjZWNDVjMCwwLjgyMywwLjQ5OCwxLjUzLDEuMjA5LDEuODM2QzQxLjM3LDQzLjgwNCw0OCwzNS4xNjQsNDgsMjVDNDgsMTIuMzE4LDM3LjY4MywyLDI1LDJTMiwxMi4zMTgsMiwyNSBDMiwzNS4xNjQsOC42Myw0My44MDQsMTcuNzkxLDQ2LjgzNnoiPjwvcGF0aD48L3N2Zz4=" />
            </a>
            <a target="_blank" href="https://twitter.com/ElaziziYoussouf">
             <SocialMediaIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL4SURBVGhD7dlJyE1hHMfxa86QJFKIEgsKIZF5KCuRhAUKUWTDBisbQsgYVshQbCxkjEhRkowLSRGZiQwlM9/fy/t2nPs/9557nuece9X51ac7dJ7nTM/z3Oc8t5AnT548WaQ5hmMGFmAS+qER/ov0wQG8xy/DI6xBO0RFJzsRHes+hTLs72taaYL1+AbrBMJeQ3crmGaYjpu4rC/C6YGvmFn3yX/UjE7BOuBSfmIl5mA/3qL++9EoijbWBl+gtuo7+xA8QFebYOY86jfSnZkNX5mG4EG40p1pDPUTdYcBaMhzBDfWrVsO1xFE/eIegnUn9QN7oWa2BQ9wFWq2DfkIq/AxmCNDzIyFVa8Pj9EV/0QjhLWxPMEUJMlmWHW6eoreKIqGMqtA0BnoN6CSnIRVl4u70ChrZh2sQmFqp0cwEnFyDVY9SemCt0VkNDVQB7cKR7mBFeiJqFyAVTapnSibo7AKx3EHGlEWYgi6QCOWpiLW9kntQNl0xztYFSTxHZ9D37lai8joyrX587YwDlFDcS1Yhsg0he7EdmhaPQoa3qyKqi08iSzKKwQLaJoS/FwrBqFkXDp6VnRxW6Fk5sEqXEuuoGxaIjxxrDUbECuzYFVQKzQIxc5uWJVU2wvoGSR29JuyB1Zl1bQViTIX4SG5WjRRLTWfK5vWWIxzqHRC6dNxJMp43MZZXEc1pyy6gAORKJqyPIRVcdYOwymTYVWcpQ/oBudsg7WDrCyCl2go3gVrJ2k7De+L2RqK38DaYRruoz1SiR74l+AS4i5CJ6Hnor7IJJpKaxHAOhAXOomhyCS6WlqmtA7EhVbZRyD1DMYhpNGstDbcC6lEI0Z/LMVFWAfggxb7vHTsCVgFrbyvhtaNtMyZ9oRRTUnPP14zBnqMtHbo2ydsRAekEjUlrbifgBbWrINw8RJ6VPUy5YibzlBTuwWX6bua50HoH6sWqGo6YSrUf9QxNfQ+g9q4lkP1qn+OdNL6s1PNZj60/lTRo2mePHnSSqHwGytirHRZXEWhAAAAAElFTkSuQmCC" />
            </a>
            <a target="_blank" href="https://stackoverflow.com/users/5927325/el-azizi-youssouf">
            <SocialMediaIcon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbC1ydWxlOmV2ZW5vZGQ7IiBkPSJNIDQwLjkyNTc4MSAxLjg5MDYyNSBMIDM3Ljg1OTM3NSAyLjQxNzk2OSBMIDQxLjE4NzUgMjAuNjI1IEwgNDQuMDMxMjUgMjAuMjUzOTA2IFogTSAyOS45Njg3NSA2LjM1MTU2MyBMIDI3LjEwMTU2MyA4LjA3ODEyNSBMIDM3LjMwMDc4MSAyMy4wMzUxNTYgTCAzOS44MjAzMTMgMjEuNDgwNDY5IFogTSAyMC43OTY4NzUgMTUuMDMxMjUgTCAxOS4xMTMyODEgMTcuNzAzMTI1IEwgMzQuNSAyNyBMIDM1LjkwMjM0NCAyNC41NzgxMjUgWiBNIDE2LjM3NSAyNC40MDIzNDQgTCAxNS42Mjg5MDYgMjcuNDAyMzQ0IEwgMzMuMzU5Mzc1IDMxLjg5NDUzMSBMIDMzLjY0MDYyNSAyOS4yMDMxMjUgWiBNIDkgMjkgTCA5IDQ3Ljk4NDM3NSBMIDM4LjkwMjM0NCA0OCBMIDM4LjkwMjM0NCA0Ny45ODQzNzUgQyAzOC45MzM1OTQgNDcuOTg0Mzc1IDM5IDI5IDM5IDI5IEwgMzYgMjkgTCAzNiA0NSBMIDEyIDQ1IEwgMTIgMjkgWiBNIDE1LjE1MjM0NCAzMi4zNTU0NjkgTCAxNC45MDIzNDQgMzUuMzM5ODQ0IEwgMzMgMzcgTCAzMy4yMDMxMjUgMzQuNSBaIE0gMTQuOTAyMzQ0IDM5IEwgMTUgNDIgTCAzMyA0MS45Mjk2ODggTCAzMyAzOSBaICI+PC9wYXRoPjwvZz48L3N2Zz4=" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/youssouf-elazizi/">
            <SocialMediaIcon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTQxLDRIOUM2LjI0LDQsNCw2LjI0LDQsOXYzMmMwLDIuNzYsMi4yNCw1LDUsNWgzMmMyLjc2LDAsNS0yLjI0LDUtNVY5QzQ2LDYuMjQsNDMuNzYsNCw0MSw0eiBNMTcsMjB2MTloLTZWMjBIMTd6IE0xMSwxNC40N2MwLTEuNCwxLjItMi40NywzLTIuNDdzMi45MywxLjA3LDMsMi40N2MwLDEuNC0xLjEyLDIuNTMtMywyLjUzQzEyLjIsMTcsMTEsMTUuODcsMTEsMTQuNDd6IE0zOSwzOWgtNmMwLDAsMC05LjI2LDAtMTAgYzAtMi0xLTQtMy41LTQuMDRoLTAuMDhDMjcsMjQuOTYsMjYsMjcuMDIsMjYsMjljMCwwLjkxLDAsMTAsMCwxMGgtNlYyMGg2djIuNTZjMCwwLDEuOTMtMi41Niw1LjgxLTIuNTYgYzMuOTcsMCw3LjE5LDIuNzMsNy4xOSw4LjI2VjM5eiI+PC9wYXRoPjwvc3ZnPg==" />
            </a>
            </SocialMediaLinks>
      </Hero>

      <Content>
        <SectionTitle>Latest stories</SectionTitle>
        {postEdges.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            category={post.node.frontmatter.category}
            key={post.node.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;

/*

<Link to="/contact">
          <Button big>
            <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
            </svg>
            Contact
          </Button>
        </Link>


*/