import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleDto } from './create-sale.dto';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  status?: string;

  @IsNotEmpty()
  @IsDate()
  updated_at?: Date;
}
