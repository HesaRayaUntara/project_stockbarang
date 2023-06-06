import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid4 } from 'uuid';
import { Stock } from './stock_entity';
import { Masuk } from './masuk_entity';

const moment = require('moment-timezone');
const timeZone = 'Asia/Jakarta';

@Entity()
export class Keluar {
  @PrimaryGeneratedColumn('uuid')
  idkeluar: string;

  @Column()
  nama_barang: string;
  
  @Column()
  jumlah: number;
  
  @Column({ type: 'varchar', length: 25 })
  penerima: string;  

  @Column({ type: 'timestamp with time zone', default: () => "now() at time zone 'Asia/Jakarta'" })
  tanggal: Date;

  @Column({nullable : true})
  idbarang: string;
  
  // @ManyToOne(() => Masuk, masuk => masuk.keluar, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'idkeluar', referencedColumnName: 'idkeluar' })
  // masuk: Masuk;
}
