"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const StyleRoot = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyleRoot;
