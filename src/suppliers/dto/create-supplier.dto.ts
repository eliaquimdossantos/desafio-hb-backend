import {
  IsString,
  IsOptional,
  IsEmail,
  Length,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  @Length(2, 255)
  name: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(255)
  email?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  phone: string;

  @IsOptional()
  @IsString()
  fulladdress?: string;
}
