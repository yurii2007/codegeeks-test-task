"use client";

import { baseThemeOptions } from "./baseThemeOptions";
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

const theme = responsiveFontSizes(createMuiTheme(baseThemeOptions));

export default theme;
