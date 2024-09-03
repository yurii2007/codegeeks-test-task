import { link } from "./components/link";
import { paper } from "./components/paper";
import { typography } from "./typography";
import { ThemeOptions } from "@mui/material";

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {},
  components: {
    MuiPaper: paper,
    MuiLink: link,
  },
  typography,
};
