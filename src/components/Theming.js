import React, { useState, useEffect, createContext } from "react";

import { createTheming } from "@callstack/react-theme-provider";
import { lighten } from "polished";
import colors from "../lib/colors";

const themes = {
  default: {
    themeName: "default",
    colors: {
      primary: colors.blue,
      text: colors.black,
      bodyBg: colors.gray,
      cardBg: colors.white,
      headerBg: colors.blue,
      link: colors.blue,
      ...colors
    }
  },
  dark: {
    themeName: "dark",
    colors: {
      primary: lighten(0.05, colors.blue),
      text: colors.white,
      bodyBg: colors.black,
      cardBg: "rgb(43, 42, 42)",
      headerBg: colors.black,
      link: lighten(0.05, colors.blue),
      ...colors
    }
  }
};

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.dark);

const LayoutThemeProvider = ({ children }) => {
  const initializeTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    } else {
      return "dark";
    }
  };

  const [themeName, setTheme] = useState(initializeTheme);

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const toggleTheme = name => setTheme(name);
  const theme = {
    ...themes[themeName],
    toggleTheme: toggleTheme,
    setTheme: setTheme
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export {
  ThemeProvider,
  LayoutThemeProvider,
  withTheme,
  useTheme,
  themes,
  colors
};
