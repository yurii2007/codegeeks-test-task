import dayjs from "dayjs";

const isValidDate = (date: any) => dayjs(date).isValid();

export default isValidDate;
