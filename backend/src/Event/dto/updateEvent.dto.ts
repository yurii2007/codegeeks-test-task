import { Type } from "class-transformer";
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Categories } from "src/common/types/CategoryEnum";
import { UpdateLocationDto } from "src/Location/dto/updateLocation.dto";

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @Type(() => UpdateLocationDto)
  @ValidateNested()
  location: UpdateLocationDto;

  @IsOptional()
  @IsEnum(Categories)
  category: string;
}
