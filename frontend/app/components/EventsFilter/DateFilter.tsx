"use client";

import dayjs from "dayjs";
import React, { useState } from "react";
import { useDebounce } from "react-use";

import isValidDate from "@utils/isValidDate";

import useUrlParams from "@hooks/useUrlParam";

import DatePicker from "@components/DatePicker";

type DateFilterProps = {
  filter: "startDate" | "endDate";
};

const DateFilter = ({ filter }: DateFilterProps) => {
  const [search, setSearch] = useUrlParams(filter);
  const [value, setValue] = useState<Date | null>(
    search ? new Date(search) : null,
  );

  const onChange = (e: Date | null) => setValue(e);

  useDebounce(
    () => {
      setSearch(filter, value ? dayjs(value).format("YYYY-MM-DD") : "");
    },
    350,
    [value],
  );

  return (
    <DatePicker
      selected={isValidDate(value) ? value : new Date()}
      onChange={onChange}
    />
  );
};

export default DateFilter;
