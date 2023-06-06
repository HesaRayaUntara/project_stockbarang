import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn('uuid')
  idstock: string;

  @Column()
  nama_barang: string;

  @Column()
  jumlah: number;

  @Column({ default: false }) // Tambahkan properti ini sesuai kebutuhan
  isBarangKeluar: boolean;
}
