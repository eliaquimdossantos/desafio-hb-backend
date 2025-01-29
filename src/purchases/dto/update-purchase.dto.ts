import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDto } from './create-purchase.dto';
import { IsDate, IsDecimal, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {
  @IsDecimal()
  @IsOptional()
  total_price?: string;

  @IsNotEmpty()
  @IsDate()
  updated_at?: Date;
}
