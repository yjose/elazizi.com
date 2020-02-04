import React from "react";
import { LayoutThemeProvider } from "./src/components/Theming";

export const wrapRootElement = ({ element }) => {
  return <LayoutThemeProvider> {element} </LayoutThemeProvider>;
};
