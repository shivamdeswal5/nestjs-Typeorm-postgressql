import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from '../user/entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { PostDto } from './dto/post-dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private postReposistory: Repository<Post>,
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    // async findAllPosts(){
    //     return await this.postReposistory.find();
    // }

     async findPosts(title: string) {
        const conditions: FindOptionsWhere<Post> = { title };
        return this.postReposistory.find({
            where: conditions,
        });
      }

    async createPost(postData:PostDto,id:number){
        const user = await this.userRepository.findOne({ where: { id: id } });
        if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
}
        const post : Post = new Post();
        post.title = postData.title;
        post.body = postData.body;
        post.image = postData.image;
        post.tags = postData.tags;
        post.user = user;
        return await this.postReposistory.save(post)
   
    }

    async findPost(id:number){
        return await this.postReposistory.findOneBy({id})
    }

    async removePost(id: number) {
    return await this.postReposistory.delete(id);
    }

    async updatePost(id: number, updatedData: PostDto){
        const post = await this.postReposistory.findOneBy({id});
        if(!post){
          throw new NotFoundException('Post Not found')
        }else{
          return await this.postReposistory.update({id}, updatedData);
        }
    
      }

  }
