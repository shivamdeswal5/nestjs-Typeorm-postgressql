import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1748941376695 implements MigrationInterface {
    name = 'Migration1748941376695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_b6a3397e33ab179a2c7d64705b9"`);
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "userEmail" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_5c1cf55c308037b5aca1038a131"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "userId" character varying(40)`);
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "userId" TO "userEmail"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_b6a3397e33ab179a2c7d64705b9" FOREIGN KEY ("userEmail") REFERENCES "user"("email") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
