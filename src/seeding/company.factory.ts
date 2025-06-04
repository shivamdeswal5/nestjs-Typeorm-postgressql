import { Company } from "../company/entities/company.entity";
import { setSeederFactory } from "typeorm-extension";
import { faker } from "@faker-js/faker";
import age from '@fakerjs/age';
import { User } from "../user/entities/user.entity";


export const CompanyFactory = setSeederFactory(Company, () => {
    const user = new User();
    user.age = age({type:'adult'});
    user.name = faker.person.firstName();
    user.gender = 'm';
    user.email = faker.internet.email();
    user.username = faker.internet.username();
    user.password = faker.internet.password();

    console.log("User to be created in factory: ",user)

    const company = new Company();
    company.ceo = `${faker.person.firstName()} ${faker.person.lastName()}`;
    company.email = faker.internet.email();
    company.name = faker.company.name();
    company.users = [user];

    console.log("Company Seed Data in factory: ",company);
    
    return company;
})