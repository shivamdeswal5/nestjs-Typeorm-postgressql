import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/entities/user.entity';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';
import { CompanyModule } from './company/company.module';
import { Company } from './company/entities/company.entity';
import { Group } from './group/enitites/group.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService:ConfigService) =>({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [User,Post,Company,Group],
        synchronize: false,
        autoLoadEntities: true
      }),
      inject: [ConfigService],
    }),
    UserModule,
    PostModule,
    CompanyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
