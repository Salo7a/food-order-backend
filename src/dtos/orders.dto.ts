import { IsString, IsNotEmpty, IsNumber, IsEmail, IsArray } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsNotEmpty()
  public postal: number;

  @IsNumber()
  @IsNotEmpty()
  public totalAmount: number;

  @IsArray()
  @IsNotEmpty()
  public items: [];
}
