import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from 'src/post/entities/post.entity';
import { Company } from 'src/company/entities/company.entity';
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, nullable:false })
  name: string;

  @Column({ type: 'varchar', length: 40 , nullable:false})
  username: string;

  @Column({ type: 'varchar', length: 40, unique: true, nullable:false })
  email: string;

  @Column({ type: 'int', nullable:false })
  age: number;

  @Column({ type: 'varchar',nullable:false  })
  password: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'], nullable:false })
  gender: string;

  @OneToMany(() => Post, (post) => post.user,{ nullable: false})
  posts: Post[]

  @ManyToMany(()=>Company,(company)=>company.users,  { onDelete: 'CASCADE' , onUpdate: 'CASCADE', nullable: false})
  companies: Company[]
}