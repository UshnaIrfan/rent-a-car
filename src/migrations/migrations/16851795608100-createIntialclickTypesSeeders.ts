import { MigrationInterface, QueryRunner } from "typeorm"

export class createIntialclickTypesSeeders16851795608100 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void>
    {
        // Create clickTypes
        await queryRunner.query("INSERT INTO clicksTypes (type) VALUES('to-air')");
        await queryRunner.query("INSERT INTO clicksTypes (type) VALUES('to-love')");
        await queryRunner.query("INSERT INTO clicksTypes (type) VALUES('to-tell')");
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {

    }

}
