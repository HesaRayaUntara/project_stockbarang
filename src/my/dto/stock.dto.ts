import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class StockDto {
  @IsNotEmpty()
  @IsString()
  nama_barang: string;

  @IsNotEmpty()
  @IsNumber()
  jumlah: number;

  @IsBoolean() // Tambahkan properti ini sesuai kebutuhan
  isBarangKeluar: boolean;
}

