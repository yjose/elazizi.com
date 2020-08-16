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
      <a href="https://www.buymeacoffee.com/yjose" target="_blank">
        <img
          className="buy_me"
          src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
          alt="Buy Me A Coffee"
          style={{ height: "20px !important", width: "217px !important" }}
        />
      </a>
      <ThemeToggler
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
        setTheme={theme.setTheme}
      />
    </React.Fragment>
  );
};
