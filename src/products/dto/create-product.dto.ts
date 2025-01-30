import { IsString, IsNotEmpty, IsDecimal, Length } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(2, 255)
  @IsNotEmpty()
  name: string;

  @IsDecimal()
  @IsNotEmpty()
  price: string;
}
