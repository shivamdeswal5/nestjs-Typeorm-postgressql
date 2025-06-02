import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './dto/post-dto';

@Controller('post')
export class PostController {
    constructor(private postService: PostService){}

    @Get()
    // getAllPosts(){
    //     return this.postService.findAllPosts();
    // }

    @Get()
    findPost(@Query('title') title: string){
      return this.postService.findPosts(title);
    }

    @Post(':id')
    createPost(@Body() post:PostDto, @Param('id') id: string){
        return this.postService.createPost(post,+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePost: PostDto) {
        return this.postService.updatePost(+id, updatePost);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.postService.removePost(+id);
  }

    @Get(':id')
    findOne(@Param('id') id: string) {
    return this.postService.findPost(+id);
  }
}
