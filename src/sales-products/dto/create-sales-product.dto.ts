import { IsString, IsNotEmpty, IsInt, Length } from 'class-validator';

export class CreateSalesProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(26, 26)
  sale_id: string;

  @IsString()
  @IsNotEmpty()
  @Length(26, 26)
  product_id: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
