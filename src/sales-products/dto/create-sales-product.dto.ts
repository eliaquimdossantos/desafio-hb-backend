import { IsString, IsNotEmpty, IsInt, Length } from 'class-validator';

export class CreateSalesProductDto {
  @IsString()
  @Length(26, 26)
  sale_id: string;

  @IsString()
  @Length(26, 26)
  product_id: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
