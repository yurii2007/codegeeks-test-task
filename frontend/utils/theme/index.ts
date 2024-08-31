"use client";

import { baseThemeOptions } from "./baseThemeOptions";
import { createTheme as createMuiTheme } from "@mui/material/styles";

const theme = createMuiTheme(baseThemeOptions);

export default theme;
