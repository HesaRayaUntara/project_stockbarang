import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Login {
  @PrimaryGeneratedColumn('uuid')
  iduser: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  email: string;
  
  @Column({ type: 'varchar', length: 50, nullable: false })
  password: string;  
}
