import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 15 , nullable: false})
  ceo: string;

  @Column({ type: 'varchar', length: 40, unique: true ,  nullable: false})
  email: string;
 
} 