import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Company } from '../company/entities/company.entity';
import { Group } from '../group/enitites/group.entity';
import { User } from '../user/entities/user.entity';
import { Post } from '../post/entities/post.entity';

config();

const configService = new ConfigService();


const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  synchronize: false,
  entities: [Group,Company,User,Post],
  migrations: ['src/database/migrations/*-migration.ts'],
  migrationsRun: false,
  logging: true,
});
 
export default AppDataSource;
