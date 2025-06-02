import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { CompanyDto } from './dto/company.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CompanyService {
       constructor(
        @InjectRepository(Company) private companyReposistory: Repository<Company>,
        @InjectRepository(User) private userReposistory: Repository<User>,

    ){}

      async createCompany(companyData: CompanyDto, id:number) {
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

        return await this.companyReposistory.save(company)
      }
      
      async createCompany2(companyData: CompanyDto) {
        const user1 = new User();
        user1.name = 'User1';
        user1.age = 22;
        user1.email = 'user1@gmail.com';
        user1.gender = 'm';
        user1.id = 101;

        const user2 = new User();
        user2.name = 'User2';
        user2.age = 22;
        user2.email = 'user2@gmail.com';
        user2.gender = 'm';
        user2.id = 105;
        
        console.log("Data to be added: ",companyData)
        const company : Company = new Company();
        company.name = companyData.name; 
        company.ceo = companyData.ceo;
        company.email = companyData.email;
        company.users = [user1, user2];

        return await this.companyReposistory.save(company)
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

      async addUserToCompany(userId:number,companyId:number){
         const user = await this.userReposistory.findOne({ where: { id: userId } });
            if (!user) {
            throw new NotFoundException(`User with id ${userId} not found`);
        }
         const company = await this.companyReposistory.findOne({ where: { id: companyId } });
            if (!company) {
            throw new NotFoundException(`Company with id ${companyId} not found`);
        }

        company.users = [user];

        console.log("Company: ",company)
    
        
        return company
        

      }
}
