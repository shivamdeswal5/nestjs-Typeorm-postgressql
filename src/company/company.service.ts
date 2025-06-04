import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { DataSource, Repository } from 'typeorm';
import { CompanyDto } from './dto/company.dto';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class CompanyService {
       constructor(
        @InjectRepository(Company) private companyReposistory: Repository<Company>,
        @InjectRepository(User) private userReposistory: Repository<User>,
        private dataSource: DataSource,

    ){}

      async createCompany(companyData: CompanyDto, id:number) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{

            const user = await this.userReposistory.findOne({ where: { id: id } });
            if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
            }
            console.log("Data to be added: ",companyData)
            const company : Company = new Company();
            company.name = companyData.name; 
            company.ceo = companyData.ceo;
            company.email = companyData.email;
            company.users = [user];

            // await this.companyReposistory.save(company);
            await queryRunner.manager.save(company)
            await queryRunner.commitTransaction();
            return company;

        }catch(e){
            await queryRunner.rollbackTransaction();
            throw e;
        } finally {
            await queryRunner.release();
        }
       
      }
      

    //   async createCompany(companyData: CompanyDto) {
    
    //     console.log("Data to be added: ",companyData)
    //     const company : Company = new Company();
    //     company.name = companyData.name; 
    //     company.ceo = companyData.ceo;
    //     company.email = companyData.email;

    //     return await this.companyReposistory.save(company)
    //   }

      async getCompanies(){
        return await this.companyReposistory.find({
            relations:{
                users:true,
            }
        });
      }

      // async addUserToCompany(companyId:number, userData:CreateUserDto){
      //   const querryRunner = this.dataSource.createQueryRunner();
      //   await querryRunner.connect();
      //   await querryRunner.startTransaction();

      //   try{

      //       const user : User = new User();
      //       user.age = userData.age;
      //       user.email = userData.email;
      //       user.gender = userData.gender;
      //       user.name = userData.name;
      //       user.password = userData.password;
      //       user.username = userData.username;

      //       await querryRunner.manager.save(user);
      //       console.log("user: ",user);
      //       const user1 = await querryRunner.manager.findOneBy(User,{id:1})
      //       const company = await querryRunner.manager.findOneBy(Company,{ id: companyId });
      //           if (!company) {
      //           throw new NotFoundException(`Company with id ${companyId} not found`);
      //       }
      //       if (!user1) {
      //           throw new NotFoundException(`User with id 1 not found`);
      //       }
      //       console.log("Searched Company: ",company);
      //       company.users = [user, user1];
      //       // company.users.push(user);
      //       // await querryRunner.manager.update(Company,{id:companyId},company);
      //       await querryRunner.commitTransaction();
      //       return company;    
      //       }catch(e){
      //           await querryRunner.rollbackTransaction();
      //           throw e;
      //       } finally{
      //           await querryRunner.release();
      //       }
      // }

      async addUserToCompany(companyId: number, userData: CreateUserDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
          const user = this.userReposistory.create(userData);
          await queryRunner.manager.save(user);

          const company = await queryRunner.manager.findOne(Company, {
            where: { id: companyId },
            relations: ['users'],
          });

          if (!company) throw new NotFoundException(`Company with id ${companyId} not found`);

          company.users.push(user);
          await queryRunner.manager.save(company);

          await queryRunner.commitTransaction();
          return company;
        } catch (e) {
          await queryRunner.rollbackTransaction();
          throw e;
        } finally {
          await queryRunner.release();
        }
      }


      async deleteCompany(id:number){
        return await this.companyReposistory.delete(id)
      }

      async updateCompany(id:number, updatedCompanyData:CompanyDto){
        const company = await this.companyReposistory.findOneBy({id});
        if(!company){
          throw new NotFoundException('Company Not found')
        }else{
          await this.companyReposistory.update({id}, updatedCompanyData);
        }
        return company;

      }
}
