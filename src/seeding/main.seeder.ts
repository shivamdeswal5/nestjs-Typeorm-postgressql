import { Company } from "../company/entities/company.entity";
import { DataSource } from "typeorm"
import {Seeder, SeederFactoryManager} from "typeorm-extension"
import { Group } from "../group/enitites/group.entity";

export class MainSeeder implements Seeder{
    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        
        const companyRepo = dataSource.getRepository(Company);
        const companyFatory = factoryManager.get(Company);
        const companyData = await companyFatory.saveMany(10);

        console.log("Company Data in main.seeder file: ",companyData);
        await companyRepo.save(companyData);

        const groupRepo = dataSource.getRepository(Group);
        const groupFactory = factoryManager.get(Group);
        const groups = await groupFactory.saveMany(5);
        console.log("inside main.seeder file: ",groups); 
        await groupRepo.save(groups);
    }
}