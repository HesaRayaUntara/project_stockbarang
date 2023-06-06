import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SupplierDto {
  @IsNotEmpty()
  @IsString()
  nama_supplier: string;

  @IsNotEmpty()
  @IsString()
  alamat: string;

  @IsNotEmpty()
  @IsString()
  telepon: string;
}
