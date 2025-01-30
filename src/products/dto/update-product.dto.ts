import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import {
  IsDate,
  IsDecimal,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @Length(2, 255)
  @IsOptional()
  name?: string;

  @IsDecimal()
  @IsOptional()
  price?: string;

  @IsOptional()
  @IsDate()
  updated_at?: Date;
}
