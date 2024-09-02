import { BadRequestException } from "@nestjs/common";

export const checkValidId = (id: number | string, message: string) => {
  if (isNaN(+id)) throw new BadRequestException(message);
};
