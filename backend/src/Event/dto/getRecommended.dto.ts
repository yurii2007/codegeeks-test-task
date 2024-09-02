import { Type } from "class-transformer";
import { IsDateString, IsEnum, IsNumber, IsOptional } from "class-validator";
import { Categories } from "src/common/types/CategoryEnum";

export class GetRecommendedQueryDto {
  @IsEnum(Categories)
  @IsOptional()
  category: Categories;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  latitude: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  longitude: number;

  @IsDateString()
  @IsOptional()
  @Type(() => Date)
  startDate: string;

  @IsDateString()
  @IsOptional()
  @Type(() => Date)
  endDate: string;
}
