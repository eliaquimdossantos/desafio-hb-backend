import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesProductDto } from './create-sales-product.dto';
import { IsInt, IsOptional, IsString, Length } from 'class-validator';

export class UpdateSalesProductDto extends PartialType(CreateSalesProductDto) {
  @IsOptional()
  @IsString()
  @Length(26, 26)
  purchase_id?: string;

  @IsInt()
  @IsOptional()
  quantity?: number;
}
