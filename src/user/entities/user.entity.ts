import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from 'src/post/entities/post.entity';
import { Company } from 'src/company/entities/company.entity';
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  username: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  gender: string;

  @OneToMany(() => Post, (post) => post.user)
    posts: Post[]

  @ManyToMany(()=>Company,(company)=>company.users,  { onDelete: 'CASCADE' , onUpdate: 'CASCADE'})
  companies: Company[]
}