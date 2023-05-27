import { MigrationInterface, QueryRunner } from "typeorm"

export class createIntialCategoriesSeeders1685179560898 implements MigrationInterface {


  public async up(queryRunner: QueryRunner): Promise<void>
  {

    // Create categories
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Airlines')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Accounting and Taxes')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Antivirus Software')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Apartments and Property Management')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Apartment and Housing Rentals')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Auto Insurance')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Auto Loans and Financing')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Auto Repair')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Auto Warranties and Protection')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Babies and Toddlers')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Baby and Toddler Clothing')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Banks')");
    await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Beauty, Cosmetics and Skincare')");

  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {

  }

}
