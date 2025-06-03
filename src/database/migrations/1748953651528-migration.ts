import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1748953651528 implements MigrationInterface {
    name = 'Migration1748953651528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" ADD "ceo" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "ceo"`);
    }

}
