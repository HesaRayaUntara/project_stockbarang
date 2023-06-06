import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MasukDto {
  @IsNotEmpty()
  @IsString()
  nama_barang: string;

  @IsNotEmpty()
  @IsString()
  keterangan: string;

  @IsNotEmpty()
  @IsNumber()
  jumlah: number;

  @IsNotEmpty()
  @IsNumber()
  konfir_jumlah: number;

  @IsNotEmpty()
  @IsString()
  penerima: string;

  @IsNotEmpty()
  @IsString()
  nama_supplier: string;

  @IsNotEmpty()
  tanggal: Date;
}
