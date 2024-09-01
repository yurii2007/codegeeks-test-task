import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLocationDto {
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}
