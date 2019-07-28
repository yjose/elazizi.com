import React from "react";
import { OneSignalProvider } from "./src/components/OneSignal";
import { LayoutThemeProvider } from "./src/components/Theming";

export const wrapRootElement = ({ element }) => {
  return (
    <OneSignalProvider>
      <LayoutThemeProvider> {element} </LayoutThemeProvider>{" "}
    </OneSignalProvider>
  );
};
