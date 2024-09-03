import { Type } from "class-transformer";
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from "class-validator";
import { Categories } from "src/common/types/CategoryEnum";
import { CreateLocationDto } from "src/Location/dto/createLocation.dto";

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @Type(() => CreateLocationDto)
  @IsNotEmptyObject()
  @ValidateNested()
  location: CreateLocationDto;

  @IsNotEmpty()
  @IsEnum(Categories)
  category: string;
}
