import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional } from "class-validator";
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

  @IsOptional()
  @Type(() => Date)
  startDate: string;

  @IsOptional()
  @Type(() => Date)
  endDate: string;
}
