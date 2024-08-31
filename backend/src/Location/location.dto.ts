import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLocationDto {
  @IsNumber()
  @IsNotEmpty()
  readonly latitude: number;

  @IsNumber()
  @IsNotEmpty()
  readonly longitude: number;
}
