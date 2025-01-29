import {
  IsString,
  IsNotEmpty,
  Length,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateSaleDto {
  @IsNotEmpty()
  @IsString()
  @Length(26, 26)
  customer_id: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  status?: string;
}
