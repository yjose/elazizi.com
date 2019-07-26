import React from "react";
import { Link } from "gatsby";
import { useTheme } from "../Theming";
import ThemeToggler from "./ThemeToggler";

export default () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Link to="/blog" activeClassName="active" aria-label="View blog page">
        Blog
      </Link>
      <Link to="/talks" activeClassName="active" aria-label="View Talks page">
        Talks
      </Link>
      <Link to="/oss" activeClassName="active" aria-label="View oss page">
        Oss
      </Link>
      <ThemeToggler
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  );
};
