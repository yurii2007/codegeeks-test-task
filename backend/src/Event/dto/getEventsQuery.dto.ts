import { IsEnum, IsOptional, IsString } from "class-validator";
import { Categories } from "src/common/types/CategoryEnum";

export class GetEventsQueryDto {
  @IsOptional()
  fromDate: Date;

  @IsOptional()
  toDate: Date;

  @IsOptional()
  @IsEnum(Categories)
  category: Categories;

  @IsOptional()
  @IsString()
  search: string;
}
