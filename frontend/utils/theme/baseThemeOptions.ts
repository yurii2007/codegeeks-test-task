import {
  Switch,
  button,
  filledInput,
  input,
  link,
  outlinedInput,
  paper,
  textfield,
} from "./components";
import { palette } from "./palette";
import { typography } from "./typography";
import { ThemeOptions } from "@mui/material";

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {},
  components: {
    MuiPaper: paper,
    MuiLink: link,
    MuiTextField: textfield,
    MuiInput: input,
    MuiOutlinedInput: outlinedInput,
    MuiFilledInput: filledInput,
    MuiButton: button,
    MuiSwitch: Switch,
  },
  typography,
  palette,
};
