import type { Site, SocialObjects, Talk } from "./types";

export const SITE: Site = {
  website: "https://elazizi.com/",
  author: "El Azizi Youssouf",
  desc: "A human first 🙌, from Morocco 🇲🇦, a mobile tribe leader at Obytes and a core team member of the Geekblabla community. I am an open-source believer and a part-time blogger. I mainly enjoy working with React and React Native and sharing my knowledge and experience with others through blog posts and talks.  ",
  title: "Youssouf El Azizi",
  ogImage: "youssouf-elazizi-og.png",
  lightAndDarkMode: true,
  postPerPage: 10,
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

export const FEATURED_REPOS = [
  "yjose/reactjs-popup",
  "obytes/react-native-template-obytes",
  "facebook/react-native",
  "geeksblabla/awesome-morocco",
  "yjose/awesome-new",
  "geeksblabla/geeksblabla.com",
  "geeksblabla/stateofdev.ma",
];

export const TALKS: Talk[] = [
  {
    date: new Date("2023-09-30"),
    title: "React Native B'Darija with Youssouf El Azizi",
    place: "JavaScript Morocco",
    url: "https://www.youtube.com/watch?v=ZYWPRUs4zlc",
  },
  {
    date: new Date("2019-04-05"),
    title: "JS Frameworks - ReactJS w/ Youssouf Elazizi",
    place: "Pentium Podcast",
    url: "https://anchor.fm/pentium/episodes/JS-Frameworks---ReactJS-w-Youssouf-Elazizi-e3l7n1?fbclid=IwAR1e52QL0VPlYFKo8HB95zhvdwEB7c4VUZqa3qrhcy7x5-vDLe01tysmaM8",
  },
  {
    date: new Date("2017-03-28"),
    title: "The state of react and React Native",
    place: "DevC, Casablanca",
    url: "https://docs.google.com/presentation/d/1_cjyEc3KPzqG_nkrYfai099aTB8RYYv8Qgw8yOJxT5E/edit#slide=id.gc6f980f91_0_0",
  },
  {
    date: new Date("2019-01-09"),
    title: "ReactJs Masterclass Tour",
    place: "DevC Tour, Morocco",
    url: "http://bit.ly/reactjs-devc",
  },
  {
    date: new Date("2022-02-10"),
    title: "Kass Atay #23",
    place: "Podcast",
    url: "https://www.youtube.com/watch?v=4G_Lt_VxVQo",
  },

  {
    date: new Date("2019-11-14"),
    title: "Javascript: The Best Part",
    place: "Devoxx Morocco, DevFest Casablanca",
    url: "https://javascript-best-part.elazizi.com/",
  },
  {
    date: new Date("2019-03-21"),
    title: "Improving React Code Quality with the Right Tools",
    place: "Forloop Morocco",
    url: "https://react-code-quality.elazizi.com/",
  },
  {
    date: new Date("2019-09-25"),
    title: "Build Modern JAMstack Websites",
    place: "DevC Casablanca",
    url: "https://docs.google.com/presentation/d/1-8_xMbUJHAwtz0oMtGWUstZadvNOqK02gdcmS3jFmpo/edit?usp=sharing",
  },
  {
    date: new Date("2020-10-25"),
    title: "Blogging: Why you should care?",
    place: "BlablaConf",
    url: "https://www.youtube.com/watch?v=OTS6AxQi7Tc&ab_channel=GeeksBlaBla",
  },
  {
    date: new Date("2022-10-13"),
    title: "React Native for Web developers",
    place: "Devoxx Morocco",
    url: "https://docs.google.com/presentation/d/1L_2o7ES6xTvSWiFdH3HYP8Wg5N-dWyzvJDa0aJcWrgE/edit?usp=sharing",
  },
];
