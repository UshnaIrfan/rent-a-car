import { MigrationInterface, QueryRunner } from "typeorm";

export class DefaultMigrationSchema1692254830174 implements MigrationInterface {
    name = 'DefaultMigrationSchema1692254830174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "country" character varying, "dateOfBirth" date, "phoneNo" character varying, "image" text, "email" character varying, "password" character varying, "roles" character varying NOT NULL DEFAULT 'user', "otpStatus" character varying NOT NULL DEFAULT 'false', "emailStatus" character varying NOT NULL DEFAULT 'false', "blockStatus" character varying NOT NULL DEFAULT 'unblock', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_documents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "title" character varying, "image" text, "documentstatus" character varying NOT NULL DEFAULT 'false', "userId" uuid, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bba8d5b4eba89555c859524148f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_verification_documents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "title" character varying, "priority" character varying, "slug" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bf93630cd11738b18b9f9f27530" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_documents" ADD CONSTRAINT "FK_c4af54cb289ba9224b08a004382" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_documents" DROP CONSTRAINT "FK_c4af54cb289ba9224b08a004382"`);
        await queryRunner.query(`DROP TABLE "users_verification_documents"`);
        await queryRunner.query(`DROP TABLE "users_documents"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
