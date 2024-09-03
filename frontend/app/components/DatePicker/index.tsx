import React from "react";
import ReactDatepicker, {
  DatePickerProps as ReactDatepickerProps,
} from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = object & ReactDatepickerProps;

const DatePicker = (props: DatePickerProps) => {
  return <ReactDatepicker {...props} />;
};

export default DatePicker;
