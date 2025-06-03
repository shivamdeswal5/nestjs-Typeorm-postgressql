import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 , nullable: false})
  title: string;

  @Column({ type: 'varchar', length: 100 ,  nullable: false})
  body: string;

  @Column({ type: 'varchar', length: 1000 ,  nullable: false})
  image: string;

  @Column({ type: 'varchar', array: true,  nullable: false })
  tags: string[];

  @ManyToOne(()=> User, (user)=> user.posts, { nullable: false})
  @JoinColumn()
  user: User

}      