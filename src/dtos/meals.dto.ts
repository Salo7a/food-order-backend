import {IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateMealDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsNumber()
  @IsNotEmpty()
  public price: number;
}
