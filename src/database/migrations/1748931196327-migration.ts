import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1748931196327 implements MigrationInterface {
    name = 'Migration1748931196327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" "public"."user_gender_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "company_users_user" DROP CONSTRAINT "FK_2c9d284df04dbf84e9f14a0a6f3"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_b6a3397e33ab179a2c7d64705b9"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_b6a3397e33ab179a2c7d64705b9" FOREIGN KEY ("userEmail") REFERENCES "user"("email") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "company_users_user" ADD CONSTRAINT "FK_2c9d284df04dbf84e9f14a0a6f3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_users_user" DROP CONSTRAINT "FK_2c9d284df04dbf84e9f14a0a6f3"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_b6a3397e33ab179a2c7d64705b9"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(40) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_b6a3397e33ab179a2c7d64705b9" FOREIGN KEY ("userEmail") REFERENCES "user"("email") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "company_users_user" ADD CONSTRAINT "FK_2c9d284df04dbf84e9f14a0a6f3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum" AS ENUM('m', 'f', 'u')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" "public"."user_gender_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(30) NOT NULL`);
    }

}
