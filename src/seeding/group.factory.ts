import { setSeederFactory } from "typeorm-extension";
import { faker } from "@faker-js/faker";
import { Group } from "../group/enitites/group.entity";


export const GroupFactory = setSeederFactory(Group, () => {
    const group = new Group();
    group.ceo = `${faker.person.firstName()} ${faker.person.lastName()}`;
    group.email = faker.internet.email();
    group.name = faker.company.name();
    
    console.log("Group created in factory: ",group)
    
    return group;
})