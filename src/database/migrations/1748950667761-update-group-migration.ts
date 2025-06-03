import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTransaction1748950667761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "ceo"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" ADD COLUMN "ceo"`);
    }

}
