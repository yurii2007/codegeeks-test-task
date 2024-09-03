import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class GetRecommendedQueryDto {
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
