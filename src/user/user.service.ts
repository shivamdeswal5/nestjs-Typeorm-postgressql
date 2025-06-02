import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = userData.name;
    user.age = userData.age;
    user.email = userData.email;
    user.username = userData.username;
    user.password = userData.password;
    user.gender = userData.gender;
    return this.userRepository.save(user);
  }

  // async findAllUser(){
  //   return await this.userRepository.find();
  // }
  
  async findAllUser(page: number, limit: number) {
  const skip = (page - 1) * limit;

  const [data, total] = await this.userRepository.findAndCount({
    skip,
    take: limit,
  });

  return {
    data,
    total,
    page,
    lastPage: Math.ceil(total / limit),
  };
}

  async viewUser(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async updateUser(id: number, updatedData: CreateUserDto){
    const user = await this.userRepository.findOneBy({id});
    if(!user){
      throw new NotFoundException('User Not found')
    }else{
      await this.userRepository.update({id}, updatedData);
    }

  }

  removeUser(id: number) {
    return this.userRepository.delete(id);
  }
}