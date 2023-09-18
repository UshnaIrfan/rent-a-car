import { MigrationInterface, QueryRunner } from "typeorm";

export class DefaultSchemas1694413198985 implements MigrationInterface {
    name = 'DefaultSchemas1694413198985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "baggage_option" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "baggageOption" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_de28049641100fcd90759c667fd" UNIQUE ("baggageOption"), CONSTRAINT "PK_7a9f01f8e331531f89e634616e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pricing" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "timeId" character varying, "carId" uuid, "price" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4f6e9c88033106a989aa7ce9dee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "drivers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "dateOfBirth" date, "country" character varying, "phoneNo" character varying, "image" text, "hourlyRate" character varying, "userId" uuid, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_92ab3fb69e566d3eb0cae896047" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_documents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "titleName" character varying, "image" text, "documentstatus" character varying NOT NULL DEFAULT 'pending', "userId" uuid, "slug" character varying, "driverId" uuid, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bba8d5b4eba89555c859524148f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "country" character varying, "dateOfBirth" date, "phoneNo" character varying, "image" text, "email" character varying, "password" character varying, "roles" character varying NOT NULL DEFAULT 'customer', "otpStatus" character varying NOT NULL DEFAULT 'false', "blockStatus" character varying NOT NULL DEFAULT 'unblock', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_image" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "carId" uuid, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_76cf0a3401a80a59c62f3576bbc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "brandId" character varying, "modelId" character varying, "yearId" character varying, "colorId" character varying, "transmissionId" character varying, "carTypeId" character varying, "baggageOptionId" character varying, "seatsCapacityId" character varying, "mileage" character varying, "chassyNo" character varying, "numberPlate" character varying, "securityAmount" character varying, "driverOptionId" character varying, "description" character varying, "latitude" integer, "longitude" integer, "pickUpLocation" character varying, "dropOffLocation" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "carId" uuid, "packagesId" character varying, "driverId" uuid, "pickupDate" TIMESTAMP, "dropoffDate" TIMESTAMP, "pickupTimeId" character varying, "dropoffTimeId" character varying, "bookingStatus" character varying NOT NULL DEFAULT 'pending', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "brands" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brandName" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6aac8072508b60a2c4173504a7b" UNIQUE ("brandName"), CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_models" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_d7adf6a03807c88711aad4197f8" UNIQUE ("model"), CONSTRAINT "PK_ee4355345e0e1c18cb6efa2bd5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "carType" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1ae2fede103439ce720c95a4acd" UNIQUE ("carType"), CONSTRAINT "PK_7bfbb82e6b89e82079a62290ff6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "color" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "colorName" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3400de12a7791603098ed3d02d4" UNIQUE ("colorName"), CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "driver_option" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "driverOption" character varying NOT NULL DEFAULT 'withDriver', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_79320bcade70a6d7150463d089f" UNIQUE ("driverOption"), CONSTRAINT "PK_3aba5d1b48a816b90fa13b47b55" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "languages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "languages" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ffd561f0683d9446d0a9e657c96" UNIQUE ("languages"), CONSTRAINT "PK_b517f827ca496b29f4d549c631d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "packages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "packages" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_020801f620e21f943ead9311c98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "seats_capacity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "seatsCapacity" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_c5e425d7f473698c5ea3bf3d210" UNIQUE ("seatsCapacity"), CONSTRAINT "PK_6f629e81eefb432f59c4a2fc0c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "time" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "time" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9ec81ea937e5d405c33a9f49251" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transmission" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "transmission" character varying NOT NULL DEFAULT 'manual', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_c130de43f56933d88ec431701de" UNIQUE ("transmission"), CONSTRAINT "PK_603d6337303910ace59d59a6d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_verification_documents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "title" character varying, "priority" character varying, "slug" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_99acc5abd44b42524fe171bf30b" UNIQUE ("slug"), CONSTRAINT "PK_bf93630cd11738b18b9f9f27530" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "year" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_034085fd1eae91eb216a9fdb12e" UNIQUE ("year"), CONSTRAINT "PK_506885a7430147dbff28fa689fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pricing" ADD CONSTRAINT "FK_82be099a35a4ebd8bbe282f9d10" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "drivers" ADD CONSTRAINT "FK_57d866371f392f459cd9ee46f6a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_documents" ADD CONSTRAINT "FK_c4af54cb289ba9224b08a004382" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_documents" ADD CONSTRAINT "FK_2353a8f5a8d9f3865af2c7f6e4b" FOREIGN KEY ("driverId") REFERENCES "drivers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "car_image" ADD CONSTRAINT "FK_0200bc874183c1427906dd64e3b" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_e1f294f4d30c0274e9793db39d4" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_336b3f4a235460dc93645fbf222" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_bc7709bc4dec5c96d0f660d2873" FOREIGN KEY ("driverId") REFERENCES "drivers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_bc7709bc4dec5c96d0f660d2873"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_336b3f4a235460dc93645fbf222"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_e1f294f4d30c0274e9793db39d4"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
        await queryRunner.query(`ALTER TABLE "car_image" DROP CONSTRAINT "FK_0200bc874183c1427906dd64e3b"`);
        await queryRunner.query(`ALTER TABLE "users_documents" DROP CONSTRAINT "FK_2353a8f5a8d9f3865af2c7f6e4b"`);
        await queryRunner.query(`ALTER TABLE "users_documents" DROP CONSTRAINT "FK_c4af54cb289ba9224b08a004382"`);
        await queryRunner.query(`ALTER TABLE "drivers" DROP CONSTRAINT "FK_57d866371f392f459cd9ee46f6a"`);
        await queryRunner.query(`ALTER TABLE "pricing" DROP CONSTRAINT "FK_82be099a35a4ebd8bbe282f9d10"`);
        await queryRunner.query(`DROP TABLE "year"`);
        await queryRunner.query(`DROP TABLE "users_verification_documents"`);
        await queryRunner.query(`DROP TABLE "transmission"`);
        await queryRunner.query(`DROP TABLE "time"`);
        await queryRunner.query(`DROP TABLE "seats_capacity"`);
        await queryRunner.query(`DROP TABLE "packages"`);
        await queryRunner.query(`DROP TABLE "languages"`);
        await queryRunner.query(`DROP TABLE "driver_option"`);
        await queryRunner.query(`DROP TABLE "color"`);
        await queryRunner.query(`DROP TABLE "car_type"`);
        await queryRunner.query(`DROP TABLE "car_models"`);
        await queryRunner.query(`DROP TABLE "brands"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "car_image"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "users_documents"`);
        await queryRunner.query(`DROP TABLE "drivers"`);
        await queryRunner.query(`DROP TABLE "pricing"`);
        await queryRunner.query(`DROP TABLE "baggage_option"`);
    }

}
