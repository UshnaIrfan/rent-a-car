import { MigrationInterface, QueryRunner } from "typeorm";

export class DefaultMigrationSchema1692620739310 implements MigrationInterface {
    name = 'DefaultMigrationSchema1692620739310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "company" character varying, "model" character varying, "year" character varying, "color" character varying, "transmission" character varying, "carType" character varying, "baggageOption" character varying, "seatsCapacity" character varying, "mileage" character varying, "chassyNo" character varying, "numberPlate" character varying, "securityAmount" character varying, "driverOption" character varying, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "country" character varying, "dateOfBirth" date, "phoneNo" character varying, "image" text, "email" character varying, "password" character varying, "roles" character varying NOT NULL DEFAULT 'user', "otpStatus" character varying NOT NULL DEFAULT 'false', "blockStatus" character varying NOT NULL DEFAULT 'unblock', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_verification_documents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "title" character varying, "priority" character varying, "slug" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_99acc5abd44b42524fe171bf30b" UNIQUE ("slug"), CONSTRAINT "PK_bf93630cd11738b18b9f9f27530" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_documents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "titleName" character varying, "image" text, "documentstatus" character varying NOT NULL DEFAULT 'false', "userId" uuid, "slug" character varying, "driverId" uuid, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_b55da7954317441d556711657a" UNIQUE ("slug"), CONSTRAINT "PK_bba8d5b4eba89555c859524148f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "drivers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "dateOfBirth" date, "country" character varying, "phoneNo" character varying, "image" text, "hourlyRate" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_92ab3fb69e566d3eb0cae896047" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_documents" ADD CONSTRAINT "FK_c4af54cb289ba9224b08a004382" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_documents" ADD CONSTRAINT "FK_b55da7954317441d556711657a9" FOREIGN KEY ("slug") REFERENCES "users_verification_documents"("slug") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_documents" ADD CONSTRAINT "FK_2353a8f5a8d9f3865af2c7f6e4b" FOREIGN KEY ("driverId") REFERENCES "drivers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_documents" DROP CONSTRAINT "FK_2353a8f5a8d9f3865af2c7f6e4b"`);
        await queryRunner.query(`ALTER TABLE "users_documents" DROP CONSTRAINT "FK_b55da7954317441d556711657a9"`);
        await queryRunner.query(`ALTER TABLE "users_documents" DROP CONSTRAINT "FK_c4af54cb289ba9224b08a004382"`);
        await queryRunner.query(`DROP TABLE "drivers"`);
        await queryRunner.query(`DROP TABLE "users_documents"`);
        await queryRunner.query(`DROP TABLE "users_verification_documents"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}
