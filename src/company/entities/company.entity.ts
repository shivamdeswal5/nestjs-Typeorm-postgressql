import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  ceo: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;
 
  @ManyToMany(()=> User, (user)=>user.companies , {onDelete:'CASCADE', onUpdate:'CASCADE'})
  @JoinTable()
  users: User[];
} 