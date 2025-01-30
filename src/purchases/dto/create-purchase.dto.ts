import {
  IsString,
  Length,
  MaxLength,
  IsOptional,
  IsNotEmpty,
  IsDecimal,
} from 'class-validator';

export class CreatePurchaseDto {
  @IsString()
  @Length(26, 26)
  sale_id: string;

  @IsString()
  @IsNotEmpty()
  @Length(26, 26)
  supplier_id: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  nfe_number?: string;

  @IsDecimal()
  @IsNotEmpty()
  total_price: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  status?: string;
}
