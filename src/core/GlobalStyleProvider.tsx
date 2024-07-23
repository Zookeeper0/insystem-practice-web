import React from "react";
import { GlobalFonts } from "../styles/assets/fonts/fonts";
import { GlobalStyle } from "../styles/global-style";

interface GlobalStyleProviderProps {
  children: React.ReactElement;
}

export const GlobalStyleProvider = ({ children }: GlobalStyleProviderProps) => {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      {children}
    </>
  );
};
