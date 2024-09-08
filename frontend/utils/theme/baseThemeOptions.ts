import { button } from "./components/button";
import { filledInput } from "./components/input/filledInput";
import { input } from "./components/input/input";
import { outlinedInput } from "./components/input/outlinedInput";
import { link } from "./components/link";
import { paper } from "./components/paper";
import { textfield } from "./components/textField";
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
  },
  typography,
  palette,
};
