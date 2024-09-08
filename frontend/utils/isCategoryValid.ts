import { Categories } from "types/general.types";

const isCategoryValid = (category: any) => {
  if (!category) return false;
  return Categories.some(
    (item) => item.toLowerCase() === category.trim?.()?.toLowerCase(),
  );
};

export default isCategoryValid;
