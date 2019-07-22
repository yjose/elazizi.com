import React from "react";
import { OneSignalProvider } from "./src/components/OneSignal";

export const wrapRootElement = ({ element }) => {
  return <OneSignalProvider> {element}</OneSignalProvider>;
};
