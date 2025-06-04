import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import AppDataSource from "../config/typeorm.config";
import { CompanyFactory } from "./company.factory";
import { MainSeeder } from "./main.seeder";
import { GroupFactory } from "./group.factory";


const options: DataSourceOptions & SeederOptions = {
    ...AppDataSource.options,
    factories: [GroupFactory,CompanyFactory],
    seeds: [MainSeeder]
}

const datasource = new DataSource(options);

void datasource.initialize().then(async ()=>{

    await datasource.synchronize(true);
    await runSeeders(datasource);
    console.log("datasource in seed file: ",datasource)
    process.exit();
})