import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
// import { MasukDto } from './masuk.dto';

export class KeluarDto {
  @IsNotEmpty()
  @IsString()
  nama_barang: string;

  @IsNotEmpty()
  @IsNumber()
  jumlah: number;

  @IsNotEmpty()
  @IsString()
  penerima: string;

  @IsNotEmpty()
  tanggal: Date;

  // @IsNotEmpty()
  // stockId: number;
}
