import { MigrationInterface, QueryRunner } from "typeorm"

export class createIntialClicksTypes16851795608101 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void>
  {

    // Create clickTypes

    await queryRunner.query("INSERT INTO clicksTypes (type) VALUES ('to-tell')");
    await queryRunner.query("INSERT INTO clicksTypes (type) VALUES ('to-air')");
    await queryRunner.query("INSERT INTO clicksTypes (type) VALUES ('to-love')");


  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {

  }

}
