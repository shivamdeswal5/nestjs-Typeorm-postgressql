import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  title: string;

  @Column({ type: 'varchar', length: 100 })
  body: string;

  @Column({ type: 'varchar', length: 1000 })
  image: string;

  @Column({ type: 'varchar', array: true })
  tags: string[];

  @ManyToOne(()=> User, (user)=> user.posts)
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email' })
  user: User

}      