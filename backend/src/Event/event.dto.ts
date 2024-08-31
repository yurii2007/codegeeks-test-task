import { Type } from "class-transformer";
import {
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from "class-validator";
import { CreateLocationDto } from "src/Location/location.dto";

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  description: string;

  @Type(() => CreateLocationDto)
  @IsNotEmptyObject()
  @ValidateNested()
  location: CreateLocationDto;
}
