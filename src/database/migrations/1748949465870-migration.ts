import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1748949465870 implements MigrationInterface {
    name = 'Migration1748949465870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "ceo" character varying(15) NOT NULL, "email" character varying(40) NOT NULL, CONSTRAINT "UQ_fa6828b123cdc1d92e1b72fde91" UNIQUE ("email"), CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "group"`);
    }

}
