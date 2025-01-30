import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDto } from './create-purchase.dto';
import { IsDecimal, IsOptional } from 'class-validator';

export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {
  @IsDecimal()
  @IsOptional()
  total_price?: string;
}
