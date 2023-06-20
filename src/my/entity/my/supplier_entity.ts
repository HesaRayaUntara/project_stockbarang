import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn('uuid')
  idsupplier: string;

  @Column({ unique: true })
  nama_supplier: string;

  @Column()
  alamat: string;

  @Column()
  telepon: string;
  
}
