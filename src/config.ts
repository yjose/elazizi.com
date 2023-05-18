import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://elazizi.com/",
  author: "El Azizi Youssouf",
  desc: "A Human first 🙌, Full Stack Web Developer 👨🏻‍💻 and OSS believers. I love working with react and ReactNative and I admire writing about my programming journey 👇👇👇",
  title: "Youssouf",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/yjose",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/youssouf-elazizi/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ElaziziYoussouf/",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
