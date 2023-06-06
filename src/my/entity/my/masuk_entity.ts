import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { v4 as uuid4 } from 'uuid';
import { Keluar } from './keluar_entity';

const moment = require('moment-timezone');
const timeZone = 'Asia/Jakarta';

@Entity()
export class Masuk {
  @PrimaryGeneratedColumn('uuid')
  idbarang: string;

  @Column({ unique: true })
  nama_barang: string;

  @Column({nullable : true})
  keterangan: string;

  @Column()
  jumlah: number;

  @Column()
  konfir_jumlah: number;
  
  @Column({ type: 'varchar', length: 25 })
  penerima: string;

  @Column({nullable : true})
  nama_supplier: string;

  @Column({ type: 'timestamp with time zone', default: () => "now() at time zone 'Asia/Jakarta'" })
  tanggal: Date;

  // @OneToMany(() => Keluar, keluar => keluar.masuk, { cascade: true })
  // keluar: Keluar[];
}