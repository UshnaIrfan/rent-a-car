// import { MigrationInterface, QueryRunner } from "typeorm";
//
// export class createInitialSellersCategoriesSeeder16851795608100 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void>
//   {
//     // Create categories_sellers_sellers
//
//     //Airlines
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d1b9b67-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d1c1e29-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d1cc9a6-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d1d5312-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d1e05b0-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d1e9e7e-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d1f2c87-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d1fc2f1-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d2068fa-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d212738-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d21af59-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d2259c2-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d22d9c1-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d2351ce-fc9b-11ed-a793-f859717be1ac')");
//      await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e17f618-fc9b-11ed-a793-f859717be1ac', '6d23d5bb-fc9b-11ed-a793-f859717be1ac')");
//
//      //Accounting and Taxes
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d24531b-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d2512ba-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d258fe9-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d260dd6-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d274596-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d27c574-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d2832d4-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d28aa08-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d291013-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d298306-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d29f29c-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e185294-fc9b-11ed-a793-f859717be1ac', '6d2a6a06-fc9b-11ed-a793-f859717be1ac')");
//
//     //Antivirus Software
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e189351-fc9b-11ed-a793-f859717be1ac', '6d2af730-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e189351-fc9b-11ed-a793-f859717be1ac', '6d2b6548-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e189351-fc9b-11ed-a793-f859717be1ac', '6d2c4738-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e189351-fc9b-11ed-a793-f859717be1ac', '6d2ce748-fc9b-11ed-a793-f859717be1ac')");
//
//
//     //Apartments and Property Management
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d2d5253-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d2dcc3f-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d2e6cc9-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d2f1e66-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d2fa946-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d300e69-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d307de0-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d310a7d-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d31c4e1-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d326d32-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d32d2d8-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d333c52-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d33b2db-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d342b88-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d34932c-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e18d066-fc9b-11ed-a793-f859717be1ac', '6d35322d-fc9b-11ed-a793-f859717be1ac')");
//
//
//     //Apartment and Housing Rentals
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e190c31-fc9b-11ed-a793-f859717be1ac', '6d35ba9a-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e190c31-fc9b-11ed-a793-f859717be1ac', '6d361ed4-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e190c31-fc9b-11ed-a793-f859717be1ac', '6d36a017-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e190c31-fc9b-11ed-a793-f859717be1ac', '6d3704ce-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e190c31-fc9b-11ed-a793-f859717be1ac', '6d3760e9-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e190c31-fc9b-11ed-a793-f859717be1ac', '6d37cd80-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e190c31-fc9b-11ed-a793-f859717be1ac', '6d386ab1-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e190c31-fc9b-11ed-a793-f859717be1ac', '6d3903c6-fc9b-11ed-a793-f859717be1ac')");
//
//
//     //Auto Insurance
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d39652c-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d39d015-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3a2f4e-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3a93c6-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3af606-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3b827a-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3c14f7-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3c863b-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3d3b70-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3db41e-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3e6039-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3edbe3-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1943f2-fc9b-11ed-a793-f859717be1ac', '6d3f42bf-fc9b-11ed-a793-f859717be1ac')");
//
//
//     //Auto Loans and Financing
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d3fa6c0-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d4019d5-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d407f81-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d40dd7e-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d4185f4-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d421804-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d429250-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d431a7d-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d4397d5-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d441491-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d454c59-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d46078b-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d4681cb-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d46f7d6-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d484c95-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d48be41-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d493133-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d49a729-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e197edd-fc9b-11ed-a793-f859717be1ac', '6d4a1830-fc9b-11ed-a793-f859717be1ac')");
//
//
//     //Auto Repair
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d4a8ff4-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d4c8284-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d4d05d7-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d4d8a3b-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d4dfdd3-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d4e7caa-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d4ef18d-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d4f6859-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d50005e-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d506e79-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d50eb65-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d515fb7-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d51e0e2-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19b484-fc9b-11ed-a793-f859717be1ac', '6d5259c6-fc9b-11ed-a793-f859717be1ac')");
//
//     //Auto Warranties and Protection
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d52e57e-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d53745a-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d540b5a-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d54a757-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d553013-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d55cb76-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d5653ea-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d56d4f1-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e19ed3a-fc9b-11ed-a793-f859717be1ac', '6d576260-fc9b-11ed-a793-f859717be1ac')");
//
//
//     //Babies and Toddlers
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a1fd0-fc9b-11ed-a793-f859717be1ac', '6d57f960-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a1fd0-fc9b-11ed-a793-f859717be1ac', '6d589773-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a1fd0-fc9b-11ed-a793-f859717be1ac', '6d5925f0-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a1fd0-fc9b-11ed-a793-f859717be1ac', '6d59a8ee-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a1fd0-fc9b-11ed-a793-f859717be1ac', '6d5ae202-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a1fd0-fc9b-11ed-a793-f859717be1ac', '6d5b6657-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a1fd0-fc9b-11ed-a793-f859717be1ac', '6d5beebc-fc9b-11ed-a793-f859717be1ac')");
//
//     //Baby and Toddler Clothing
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a5524-fc9b-11ed-a793-f859717be1ac', '6d5c5be2-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a5524-fc9b-11ed-a793-f859717be1ac', '6d5d3f37-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a5524-fc9b-11ed-a793-f859717be1ac', '6d5f323e-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a5524-fc9b-11ed-a793-f859717be1ac', '6d5fc380-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a5524-fc9b-11ed-a793-f859717be1ac', '6d604f2e-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a5524-fc9b-11ed-a793-f859717be1ac', '6d5beebc-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a5524-fc9b-11ed-a793-f859717be1ac', '6d6123ce-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a5524-fc9b-11ed-a793-f859717be1ac', '6d619f45-fc9b-11ed-a793-f859717be1ac')");
//
//
//     //Banks
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d6225ce-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d454c59-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d40dd7e-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d46078b-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d6394e4-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d641ac9-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d4a1830-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d654316-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d65c8b2-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d4397d5-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d66ba37-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d672af6-fc9b-11ed-a793-f859717be1ac')");
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1a87a3-fc9b-11ed-a793-f859717be1ac', '6d431a7d-fc9b-11ed-a793-f859717be1ac')");
//
//
//
//
//     //Beauty, Cosmetics and Skincare
//     await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesid, sellersid) VALUES ('5e1ad1fe-fc9b-11ed-a793-f859717be1ac', '6d67de19-fc9b-11ed-a793-f859717be1ac')");
//
//
//
//
//
//   }
//
//   public async down(queryRunner: QueryRunner): Promise<void>
//   {
//     // Rollback logic (if required) goes here
//   }
// }
//
