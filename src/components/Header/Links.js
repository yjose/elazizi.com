import React from "react";
import { Link } from "gatsby";
import { useTheme } from "../Theming";
import ThemeToggler from "./ThemeToggler";

export default ({ close }) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Link
        to="/blog"
        activeClassName="active"
        aria-label="View blog page"
        onClick={close}
      >
        Blog
      </Link>
      <Link
        to="/talks"
        activeClassName="active"
        aria-label="View Talks page"
        onClick={close}
      >
        Talks
      </Link>
      <Link
        to="/oss"
        activeClassName="active"
        aria-label="View oss page"
        onClick={close}
      >
        OSS
      </Link>
      <Link
        to="/about"
        activeClassName="active"
        aria-label="View about page"
        onClick={close}
      >
        About
      </Link>
      <ThemeToggler
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
        setTheme={theme.setTheme}
      />
    </React.Fragment>
  );
};
