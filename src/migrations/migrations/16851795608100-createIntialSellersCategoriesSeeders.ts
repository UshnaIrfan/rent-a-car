import { MigrationInterface, QueryRunner } from "typeorm";

export class createInitialSellersCategoriesSeeder16851795608100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void>
  {
    // Create categories_sellers_sellers


    //Airlines
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
     VALUES
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd0777d-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd0ee1d-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd19bd1-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd22a05-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd2ed20-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd3b25c-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd42fe9-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd4a488-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd53a5f-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd5c2b7-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd62ea9-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd6982b-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd707e6-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd766f3-ff7c-11ed-a793-f859717be1ac'),
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd7e2bd-ff7c-11ed-a793-f859717be1ac')`);



    //Accounting and Taxes
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
    VALUES
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4dd8680f-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4dd8d77f-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4dd93c0e-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4dd9c2b1-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4dda73a5-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4ddad78e-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4ddb4eda-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4ddbcaa7-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4ddc2e3b-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4ddca74b-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4ddd01b8-ff7c-11ed-a793-f859717be1ac'),
     ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4ddd5c2d-ff7c-11ed-a793-f859717be1ac')`);



    //Antivirus Software
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
    VALUES
    ('c85846af-ff79-11ed-a793-f859717be1ac', '4dddcaa0-ff7c-11ed-a793-f859717be1ac'),
    ('c85846af-ff79-11ed-a793-f859717be1ac', '4dde416f-ff7c-11ed-a793-f859717be1ac'),
    ('c85846af-ff79-11ed-a793-f859717be1ac', '4ddeb9ce-ff7c-11ed-a793-f859717be1ac'),
    ('c85846af-ff79-11ed-a793-f859717be1ac', '4ddf309d-ff7c-11ed-a793-f859717be1ac')`);




   //Apartments and Property Management
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4ddf8592-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4ddfecf9-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de06063-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de0bc9c-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de110a8-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de18048-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de1f763-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de27e12-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de30500-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de35975-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de3b694-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de40e10-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de478b1-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de4f17f-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de56443-ff7c-11ed-a793-f859717be1ac'),
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de5b40e-ff7c-11ed-a793-f859717be1ac')`);



    //Apartment and Housing Rentals
   await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
     ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de613af-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de67118-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de6c9b3-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de72457-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de78e7f-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de7fe70-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de85679-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de8aa5f-ff7c-11ed-a793-f859717be1ac')`);



   //Auto Insurance
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
    VALUES
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4de90d0c-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4de98132-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4de9d8be-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4dea2ebe-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4deaa5cc-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4deb1aea-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4deb88c4-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4dec2ec5-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4dec87e4-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4dece21e-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4ded3c66-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4ded9eed-ff7c-11ed-a793-f859717be1ac'),
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4dee0d55-ff7c-11ed-a793-f859717be1ac')`);




    //Auto Loans and Financing
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
    VALUES
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4dee7bfb-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4deed630-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4def355f-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4def9a31-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4defeb2a-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df04606-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df0bd1f-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df13554-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df1a9a3-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df1fc81-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df29f4c-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df3177c-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df389b1-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df3ee13-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df4542d-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df4bfe4-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df50d10-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df5663a-ff7c-11ed-a793-f859717be1ac'),
      ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df5bed3-ff7c-11ed-a793-f859717be1ac')`);


    //Auto Repair
     await queryRunner.query(`
     INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
     VALUES
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df60e11-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df695ac-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df70dad-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df7860c-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df7e60b-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df863e5-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df8bac6-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df90c34-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df95173-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4df9aed5-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4dfa1ec9-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4dfa9fe4-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4dfb0ea7-ff7c-11ed-a793-f859717be1ac'),
      ('c859d77c-ff79-11ed-a793-f859717be1ac', '4dfb6bb8-ff7c-11ed-a793-f859717be1ac')`);


   //Auto Warranties and Protection
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
     VALUES
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfbca94-ff7c-11ed-a793-f859717be1ac'),
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfc22c4-ff7c-11ed-a793-f859717be1ac'),
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfc7651-ff7c-11ed-a793-f859717be1ac'),
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfccda1-ff7c-11ed-a793-f859717be1ac'),
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfd3ed3-ff7c-11ed-a793-f859717be1ac'),
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfdd179-ff7c-11ed-a793-f859717be1ac'),
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfe2a71-ff7c-11ed-a793-f859717be1ac'),
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfe847a-ff7c-11ed-a793-f859717be1ac'),
      ('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfeda0f-ff7c-11ed-a793-f859717be1ac')`);



    //Babies and Toddlers
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
    VALUES
      ('c85a54ad-ff79-11ed-a793-f859717be1ac', '4dff40f1-ff7c-11ed-a793-f859717be1ac'),
      ('c85a54ad-ff79-11ed-a793-f859717be1ac', '4dff96d7-ff7c-11ed-a793-f859717be1ac'),
      ('c85a54ad-ff79-11ed-a793-f859717be1ac', '4dfffa6d-ff7c-11ed-a793-f859717be1ac'),
      ('c85a54ad-ff79-11ed-a793-f859717be1ac', '4e007564-ff7c-11ed-a793-f859717be1ac'),
      ('c85a54ad-ff79-11ed-a793-f859717be1ac', '4e00d449-ff7c-11ed-a793-f859717be1ac'),
      ('c85a54ad-ff79-11ed-a793-f859717be1ac', '4e0126cf-ff7c-11ed-a793-f859717be1ac'),
      ('c85a54ad-ff79-11ed-a793-f859717be1ac', '4e017bd2-ff7c-11ed-a793-f859717be1ac')`);



   //Baby and Toddler Clothing
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
    VALUES
      ('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e017bd2-ff7c-11ed-a793-f859717be1ac'),
      ('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e01da77-ff7c-11ed-a793-f859717be1ac'),
      ('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e027513-ff7c-11ed-a793-f859717be1ac'),
      ('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e02dc0e-ff7c-11ed-a793-f859717be1ac'),
      ('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e03630b-ff7c-11ed-a793-f859717be1ac'),
      ('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e03e8c6-ff7c-11ed-a793-f859717be1ac'),
      ('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e049487-ff7c-11ed-a793-f859717be1ac'),
      ('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e04eb59-ff7c-11ed-a793-f859717be1ac')`);



    //Banks
     await queryRunner.query(`
     INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
     VALUES
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4e0613b8-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4e069b11-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4e0728ed-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4e078b3b-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4e082b70-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4e088173-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4df13554-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4df1a9a3-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4df5bed3-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4df29f4c-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4df3177c-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4def9a31-ff7c-11ed-a793-f859717be1ac'),
      ('c85ad092-ff79-11ed-a793-f859717be1ac', '4df389b1-ff7c-11ed-a793-f859717be1ac')`);



    //Beauty, Cosmetics and Skincare
    await queryRunner.query(`
     INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
     VALUES
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e08fe0d-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e095b33-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e09b8c0-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0a17aa-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0a81e8-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0ad8ba-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0b6c07-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0bd088-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0c3a92-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0d0f55-ff7c-11ed-a793-f859717be1ac'),
      ('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0d7dbc-ff7c-11ed-a793-f859717be1ac')`);



   //Bedding and Bath
    await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
     VALUES
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e0de4bb-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e0e506d-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e0ecaad-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e0f3d93-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e102588-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e108993-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e1179a5-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e11cdce-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e122875-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e129a5d-ff7c-11ed-a793-f859717be1ac'),
      ('c85b592d-ff79-11ed-a793-f859717be1ac', '4e130808-ff7c-11ed-a793-f859717be1ac')`);



//Supercenter Stores
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
      ('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e1373c9-ff7c-11ed-a793-f859717be1ac'),
      ('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e13ce05-ff7c-11ed-a793-f859717be1ac'),
      ('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e149ab4-ff7c-11ed-a793-f859717be1ac'),
      ('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e14ef0c-ff7c-11ed-a793-f859717be1ac'),
      ('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac'),
      ('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e15d0f6-ff7c-11ed-a793-f859717be1ac'),
      ('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac'),
      ('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e108993-ff7c-11ed-a793-f859717be1ac')`);


//Books
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e163ef7-ff7c-11ed-a793-f859717be1ac'),
    ('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e1698a4-ff7c-11ed-a793-f859717be1ac'),
    ('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e170470-ff7c-11ed-a793-f859717be1ac'),
    ('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e1788f7-ff7c-11ed-a793-f859717be1ac'),
    ('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e17e864-ff7c-11ed-a793-f859717be1ac'),
    ('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac')`);


//Brokers
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1844b7-ff7c-11ed-a793-f859717be1ac'),
    ('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e18a1ae-ff7c-11ed-a793-f859717be1ac'),
    ('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1907d6-ff7c-11ed-a793-f859717be1ac'),
    ('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e199b4a-ff7c-11ed-a793-f859717be1ac'),
    ('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1a063a-ff7c-11ed-a793-f859717be1ac'),
    ('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1a62af-ff7c-11ed-a793-f859717be1ac'),
    ('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1ab192-ff7c-11ed-a793-f859717be1ac'),
    ('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1afb7c-ff7c-11ed-a793-f859717be1ac')`);



//Cable, Video and TV Streaming
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1b52ef-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1bab55-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1c10a6-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1c8f94-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1cecfc-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1d4123-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1d9eab-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1df814-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1e89cf-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1edf22-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1f82ac-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e200ceb-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e206ac8-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e20dff9-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e213489-ff7c-11ed-a793-f859717be1ac'),
    ('c85c4849-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac ')`);



//Wireless
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e1d4123-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e1d9eab-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e21813a-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e21e836-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e224ae0-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e22a4e3-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e22fab8-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e23536f-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e23bb6c-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e242e05-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e2494a3-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e255c05-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e25b1cf-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e260b7c-ff7c-11ed-a793-f859717be1ac'),
    ('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e2698a5-ff7c-11ed-a793-f859717be1ac')`);


//Chocolate
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e26ef53-ff7c-11ed-a793-f859717be1ac'),
    ('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e274112-ff7c-11ed-a793-f859717be1ac'),
    ('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e27994b-ff7c-11ed-a793-f859717be1ac'),
    ('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e2877a2-ff7c-11ed-a793-f859717be1ac'),
    ('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e28e00e-ff7c-11ed-a793-f859717be1ac'),
    ('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e2939f1-ff7c-11ed-a793-f859717be1ac')`);


//Coffee
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e298eb1-ff7c-11ed-a793-f859717be1ac'),
    ('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e29ed07-ff7c-11ed-a793-f859717be1ac'),
    ('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e2a48b2-ff7c-11ed-a793-f859717be1ac'),
    ('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e2a9ac2-ff7c-11ed-a793-f859717be1ac'),
    ('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e2af322-ff7c-11ed-a793-f859717be1ac'),
    ('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e2bac64-ff7c-11ed-a793-f859717be1ac')`);


//Credit Cards
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2c1781-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2c9c4e-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2d2a43-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2d8403-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2deac7-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2e547e-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2ee69f-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2f45bc-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4df1a9a3-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4df29f4c-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4def9a31-ff7c-11ed-a793-f859717be1ac'),
    ('c85d113b-ff79-11ed-a793-f859717be1ac', '4df3177c-ff7c-11ed-a793-f859717be1ac')`);



//Cryptocurrency Exchanges and Wallets
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c85d5377-ff79-11ed-a793-f859717be1ac', '4e3023b7-ff7c-11ed-a793-f859717be1ac'),
    ('c85d5377-ff79-11ed-a793-f859717be1ac', '4e30754e-ff7c-11ed-a793-f859717be1ac'),
    ('c85d5377-ff79-11ed-a793-f859717be1ac', '4e30c90a-ff7c-11ed-a793-f859717be1ac'),
    ('c85d5377-ff79-11ed-a793-f859717be1ac', '4e312272-ff7c-11ed-a793-f859717be1ac'),
    ('c85d5377-ff79-11ed-a793-f859717be1ac', '4e318d90-ff7c-11ed-a793-f859717be1ac'),
    ('c85d5377-ff79-11ed-a793-f859717be1ac', '4e31f31e-ff7c-11ed-a793-f859717be1ac'),
    ('c85d5377-ff79-11ed-a793-f859717be1ac', '4e32486e-ff7c-11ed-a793-f859717be1ac'),
    ('c85d5377-ff79-11ed-a793-f859717be1ac', '4e199b4a-ff7c-11ed-a793-f859717be1ac')`);



// creativity

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e32d358-ff7c-11ed-a793-f859717be1ac'), 
  ('c85d7b50-ff79-11ed-a793-f859717be1ac', '4ecff9bd-ff7c-11ed-a793-f859717be1ac'), 
  ('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e33914a-ff7c-11ed-a793-f859717be1ac'), 
  ('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e34550d-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e34b777-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e352224-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e35a267-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e35fb52-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e36574f-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e371311-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e377f0e-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e37e37f-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e3846ff-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e3897b0-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e38f4a3-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e39484c-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e399774-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e39f7d7-ff7c-11ed-a793-f859717be1ac'), 
('c85d7b50-ff79-11ed-a793-f859717be1ac', '4e3ac873-ff7c-11ed-a793-f859717be1ac')`);



    // Computers, Cell Phones and Electronics

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e21e836-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e224ae0-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3b82c0-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3bfd85-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3c61b5-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3cd7c2-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3d434f-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3e3ea7-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3eb792-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3f0f6b-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e3fa480-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e400d34-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e406148-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e410109-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e418464-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e41e07e-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e4247b9-ff7c-11ed-a793-f859717be1ac'), 
('c85dc71a-ff79-11ed-a793-f859717be1ac', '4e429660-ff7c-11ed-a793-f859717be1ac') `);



    // Commuter Rail Systems
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c85ded13-ff79-11ed-a793-f859717be1ac', '4e435c63-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e43f032-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e44746e-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e44ddb0-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e453830-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e458aa1-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e45d864-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e46251c-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e46746f-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e474d13-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e479635-ff7c-11ed-a793-f859717be1ac'), 
('c85ded13-ff79-11ed-a793-f859717be1ac', '4e47e539-ff7c-11ed-a793-f859717be1ac')`);

    //Dating
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c85e2569-ff79-11ed-a793-f859717be1ac', '4e482b2d-ff7c-11ed-a793-f859717be1ac'), 
('c85e2569-ff79-11ed-a793-f859717be1ac', '4e48819c-ff7c-11ed-a793-f859717be1ac'), 
('c85e2569-ff79-11ed-a793-f859717be1ac', '4e48d535-ff7c-11ed-a793-f859717be1ac'), 
('c85e2569-ff79-11ed-a793-f859717be1ac', '4e492b95-ff7c-11ed-a793-f859717be1ac'), 
('c85e2569-ff79-11ed-a793-f859717be1ac', '4e498a47-ff7c-11ed-a793-f859717be1ac'), 
('c85e2569-ff79-11ed-a793-f859717be1ac', '4e49faa2-ff7c-11ed-a793-f859717be1ac'), 
('c85e2569-ff79-11ed-a793-f859717be1ac', '4e4a818c-ff7c-11ed-a793-f859717be1ac'), 
('c85e2569-ff79-11ed-a793-f859717be1ac', '4e4ad59f-ff7c-11ed-a793-f859717be1ac')`);

    // Daycare

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4b234e-ff7c-11ed-a793-f859717be1ac'), 
('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4b79db-ff7c-11ed-a793-f859717be1ac'), 
('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4be875-ff7c-11ed-a793-f859717be1ac'), 
('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4c48b1-ff7c-11ed-a793-f859717be1ac'), 
('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4c974a-ff7c-11ed-a793-f859717be1ac'), 
('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4cf501-ff7c-11ed-a793-f859717be1ac'), 
('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4d77e8-ff7c-11ed-a793-f859717be1ac'), 
('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4dc9e7-ff7c-11ed-a793-f859717be1ac'), 
('c85e6233-ff79-11ed-a793-f859717be1ac', '4e4e15e0-ff7c-11ed-a793-f859717be1ac') `);



    // Department Stores

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c85e9808-ff79-11ed-a793-f859717be1ac', '4e4e62d6-ff7c-11ed-a793-f859717be1ac'), 
('c85e9808-ff79-11ed-a793-f859717be1ac', '4e4eb3f8-ff7c-11ed-a793-f859717be1ac'), 
('c85e9808-ff79-11ed-a793-f859717be1ac', '4e4f0475-ff7c-11ed-a793-f859717be1ac'), 
('c85e9808-ff79-11ed-a793-f859717be1ac', '4e4f9a18-ff7c-11ed-a793-f859717be1ac'), 
('c85e9808-ff79-11ed-a793-f859717be1ac', '4e501675-ff7c-11ed-a793-f859717be1ac'), 
('c85e9808-ff79-11ed-a793-f859717be1ac', '4e507c1f-ff7c-11ed-a793-f859717be1ac'), 
('c85e9808-ff79-11ed-a793-f859717be1ac', '4e5129bb-ff7c-11ed-a793-f859717be1ac'), 
('c85e9808-ff79-11ed-a793-f859717be1ac', '4e518e22-ff7c-11ed-a793-f859717be1ac'), 
('c85e9808-ff79-11ed-a793-f859717be1ac', '4e51dcf9-ff7c-11ed-a793-f859717be1ac')`);


    // Dental Insurance

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
('c85ebfe2-ff79-11ed-a793-f859717be1ac', '4dec87e4-ff7c-11ed-a793-f859717be1ac'), 
('c85ebfe2-ff79-11ed-a793-f859717be1ac', '4e525ca7-ff7c-11ed-a793-f859717be1ac'), 
('c85ebfe2-ff79-11ed-a793-f859717be1ac', '4e52bf0e-ff7c-11ed-a793-f859717be1ac'), 
('c85ebfe2-ff79-11ed-a793-f859717be1ac', '4e531bd5-ff7c-11ed-a793-f859717be1ac'), 
('c85ebfe2-ff79-11ed-a793-f859717be1ac', '4e5386c7-ff7c-11ed-a793-f859717be1ac'), 
('c85ebfe2-ff79-11ed-a793-f859717be1ac', '4e53f951-ff7c-11ed-a793-f859717be1ac')`);


    // Discount Department Stores

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e14ef0c-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e544423-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e54e036-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e5525cb-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e557329-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e55ef3e-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e564fc3-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e56c14c-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e5712b9-ff7c-11ed-a793-f859717be1ac'), 
('c85ef456-ff79-11ed-a793-f859717be1ac', '4e578db7-ff7c-11ed-a793-f859717be1ac')`);



    // Discount Stores

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e108993-ff7c-11ed-a793-f859717be1ac'), 
('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac'), 
('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e1373c9-ff7c-11ed-a793-f859717be1ac'), 
('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e15d0f6-ff7c-11ed-a793-f859717be1ac'), 
('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e58184c-ff7c-11ed-a793-f859717be1ac'), 
('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e586cf6-ff7c-11ed-a793-f859717be1ac'), 
('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e58b58d-ff7c-11ed-a793-f859717be1ac'), 
('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e59655e-ff7c-11ed-a793-f859717be1ac'), 
('c85fbd0b-ff79-11ed-a793-f859717be1ac', '4e5a5606-ff7c-11ed-a793-f859717be1ac')`);


    // Fashion Women

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5af950-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5b469e-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5b93c4-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5be1a9-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5c3449-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5ca095-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5cfc24-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5d4fc3-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5e6663-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5eb00d-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5f0982-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5f6fd5-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e5fd9b8-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e6024f3-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e607049-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e60d276-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e6120b7-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e617da6-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e61f8eb-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e6249a5-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e62a342-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e635040-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e63b9a1-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e6413f1-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e649b96-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e654346-ff7c-11ed-a793-f859717be1ac'), 
('c85fe81c-ff79-11ed-a793-f859717be1ac', '4e6599fb-ff7c-11ed-a793-f859717be1ac')`);


    // Fashion Men

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e5b93c4-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e5c3449-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e5cfc24-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e5d4fc3-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e5e6663-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e5eb00d-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e5f6fd5-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e5fd9b8-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e6024f3-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e607049-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e60d276-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e6120b7-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e617da6-ff7c-11ed-a793-f859717be1ac'), 
('c8601fc6-ff79-11ed-a793-f859717be1ac', '4e61f8eb-ff7c-11ed-a793-f859717be1ac') `);


    // Fast Food

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86050a3-ff79-11ed-a793-f859717be1ac', '4e6cb15c-ff7c-11ed-a793-f859717be1ac'), 
('c86050a3-ff79-11ed-a793-f859717be1ac', '4e6cfb6f-ff7c-11ed-a793-f859717be1ac'), 
('c86050a3-ff79-11ed-a793-f859717be1ac', '4e6d5d9f-ff7c-11ed-a793-f859717be1ac'), 
('c86050a3-ff79-11ed-a793-f859717be1ac', '4e6db2a6-ff7c-11ed-a793-f859717be1ac'), 
('c86050a3-ff79-11ed-a793-f859717be1ac', '4e6e0461-ff7c-11ed-a793-f859717be1ac'), 
('c86050a3-ff79-11ed-a793-f859717be1ac', '4e6e7218-ff7c-11ed-a793-f859717be1ac')`);



    // Financial Advisory and Money Management

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
('c8608695-ff79-11ed-a793-f859717be1ac', '4e082b70-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e1844b7-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e1907d6-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e6ecf61-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e6f327a-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e6fb831-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e70646e-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e70b2df-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e70fdaa-ff7c-11ed-a793-f859717be1ac'), 
('c8608695-ff79-11ed-a793-f859717be1ac', '4e714ece-ff7c-11ed-a793-f859717be1ac') `);


    // Flowers

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c860ba71-ff79-11ed-a793-f859717be1ac', '4e71a8db-ff7c-11ed-a793-f859717be1ac'), 
('c860ba71-ff79-11ed-a793-f859717be1ac', '4e721a06-ff7c-11ed-a793-f859717be1ac'), 
('c860ba71-ff79-11ed-a793-f859717be1ac', '4e72836e-ff7c-11ed-a793-f859717be1ac'), 
('c860ba71-ff79-11ed-a793-f859717be1ac', '4e72d5a1-ff7c-11ed-a793-f859717be1ac'), 
('c860ba71-ff79-11ed-a793-f859717be1ac', '4e731f4a-ff7c-11ed-a793-f859717be1ac'), 
('c860ba71-ff79-11ed-a793-f859717be1ac', '4e736dff-ff7c-11ed-a793-f859717be1ac'), 
('c860ba71-ff79-11ed-a793-f859717be1ac', '4e73b6da-ff7c-11ed-a793-f859717be1ac')`);



    // Food and Grocery Delivery

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c860f687-ff79-11ed-a793-f859717be1ac', '4e740cfe-ff7c-11ed-a793-f859717be1ac'), 
('c860f687-ff79-11ed-a793-f859717be1ac', '4e74611d-ff7c-11ed-a793-f859717be1ac'), 
('c860f687-ff79-11ed-a793-f859717be1ac', '4e74c4d6-ff7c-11ed-a793-f859717be1ac'), 
('c860f687-ff79-11ed-a793-f859717be1ac', '4e7522dd-ff7c-11ed-a793-f859717be1ac'), 
('c860f687-ff79-11ed-a793-f859717be1ac', '4e7588b1-ff7c-11ed-a793-f859717be1ac'), 
('c860f687-ff79-11ed-a793-f859717be1ac', '4e75e101-ff7c-11ed-a793-f859717be1ac'), 
('c860f687-ff79-11ed-a793-f859717be1ac', '4e7647f1-ff7c-11ed-a793-f859717be1ac'), 
('c860f687-ff79-11ed-a793-f859717be1ac', '4e769ac8-ff7c-11ed-a793-f859717be1ac'), 
('c860f687-ff79-11ed-a793-f859717be1ac', '4e76f6ed-ff7c-11ed-a793-f859717be1ac')`);


    // Freelance Marketplaces

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8611db1-ff79-11ed-a793-f859717be1ac', '4e7747ac-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e7785c4-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e77e268-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e7846ae-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e78a885-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e78fc16-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e795cd6-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e79b658-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e7a04cc-ff7c-11ed-a793-f859717be1ac'), 
('c8611db1-ff79-11ed-a793-f859717be1ac', '4e7a524b-ff7c-11ed-a793-f859717be1ac') `);


    // Gas Stations

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7a99c5-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7af6a4-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7b5af4-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7bb29c-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7bfeb1-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7c543f-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7cbe4f-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7d06fc-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7d5e64-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7dc2cf-ff7c-11ed-a793-f859717be1ac'), 
('c8615181-ff79-11ed-a793-f859717be1ac', '4e7e1e23-ff7c-11ed-a793-f859717be1ac')`);


    // Gifts

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8617db6-ff79-11ed-a793-f859717be1ac', '4e7e7e60-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e7ec901-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e7f2fd2-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e7f7bcd-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e7fd764-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e806a10-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e80b69c-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e81211b-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e817fce-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e81e3f4-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e82381a-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e82851f-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e82d48d-ff7c-11ed-a793-f859717be1ac'), 
('c8617db6-ff79-11ed-a793-f859717be1ac', '4e831dbe-ff7c-11ed-a793-f859717be1ac')`);



    // Gyms, Pilates, Yoga, Barre, HIIT and Cycling

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e8375b1-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e83cc4f-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e8428db-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e84928c-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e84f8f1-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e8599f5-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e85f651-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e864ccd-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e86a01e-ff7c-11ed-a793-f859717be1ac'), 
('c861b6ba-ff79-11ed-a793-f859717be1ac', '4e86f936-ff7c-11ed-a793-f859717be1ac')`);


    // Health Food and Vitamins

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e75e101-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e8791ff-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e87f308-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e884ad2-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e88eb8f-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e893c71-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e89b55c-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e8a0866-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e8a695e-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e8aca5f-ff7c-11ed-a793-f859717be1ac'), 
('c861eeb2-ff79-11ed-a793-f859717be1ac', '4e8b171e-ff7c-11ed-a793-f859717be1ac')`);



    // Health Insurance

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e52bf0e-ff7c-11ed-a793-f859717be1ac'), 
('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e531bd5-ff7c-11ed-a793-f859717be1ac'), 
('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e8ba3fc-ff7c-11ed-a793-f859717be1ac'), 
('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e8bff52-ff7c-11ed-a793-f859717be1ac'), 
('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e8c8814-ff7c-11ed-a793-f859717be1ac'), 
('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e8cd519-ff7c-11ed-a793-f859717be1ac'), 
('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e8d2be9-ff7c-11ed-a793-f859717be1ac'), 
('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e8d9e6c-ff7c-11ed-a793-f859717be1ac'), 
('c8622a9b-ff79-11ed-a793-f859717be1ac', '4e8e26b4-ff7c-11ed-a793-f859717be1ac') `);



    // Home and Mortgage Loans

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86267f8-ff79-11ed-a793-f859717be1ac', '4def9a31-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4df0bd1f-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4df29f4c-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4df3177c-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e088173-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e2ee69f-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e8eb838-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e8f7a05-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e8ff33a-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e904b63-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e90f000-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e918c4b-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e920553-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e925e3d-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e92d712-ff7c-11ed-a793-f859717be1ac'), 
('c86267f8-ff79-11ed-a793-f859717be1ac', '4e9322b9-ff7c-11ed-a793-f859717be1ac')`);


    // Home Style and Furniture

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8629899-ff79-11ed-a793-f859717be1ac', '4e102588-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e108993-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e11cdce-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e937c2a-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e93e1fb-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e947b2e-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e94c06c-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e950fbb-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e95653c-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e960f9b-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e966b20-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e96caf9-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e972db8-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e977b2e-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e97fc69-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e985035-ff7c-11ed-a793-f859717be1ac'), 
('c8629899-ff79-11ed-a793-f859717be1ac', '4e98a751-ff7c-11ed-a793-f859717be1ac')  `);



    // Home, Garden and Plants

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
  ('c862cf30-ff79-11ed-a793-f859717be1ac', '4e99b2ff-ff7c-11ed-a793-f859717be1ac'), 
('c862cf30-ff79-11ed-a793-f859717be1ac', '4e9a0bd3-ff7c-11ed-a793-f859717be1ac'), 
('c862cf30-ff79-11ed-a793-f859717be1ac', '4e9a5aef-ff7c-11ed-a793-f859717be1ac')`);


    // Home Improvement

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
('c863053a-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac'), 
('c863053a-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac'), 
('c863053a-ff79-11ed-a793-f859717be1ac', '4e960f9b-ff7c-11ed-a793-f859717be1ac'), 
('c863053a-ff79-11ed-a793-f859717be1ac', '4e9b13de-ff7c-11ed-a793-f859717be1ac'), 
('c863053a-ff79-11ed-a793-f859717be1ac', '4e9b5d27-ff7c-11ed-a793-f859717be1ac'), 
('c863053a-ff79-11ed-a793-f859717be1ac', '4e9bca02-ff7c-11ed-a793-f859717be1ac'), 
('c863053a-ff79-11ed-a793-f859717be1ac', '4e9c2550-ff7c-11ed-a793-f859717be1ac'), 
('c863053a-ff79-11ed-a793-f859717be1ac', '4e9cab05-ff7c-11ed-a793-f859717be1ac') `);


    // Home Repair and Handyman

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8633eb9-ff79-11ed-a793-f859717be1ac', '4e76f6ed-ff7c-11ed-a793-f859717be1ac'), 
('c8633eb9-ff79-11ed-a793-f859717be1ac', '4e79b658-ff7c-11ed-a793-f859717be1ac'), 
('c8633eb9-ff79-11ed-a793-f859717be1ac', '4e9d6a58-ff7c-11ed-a793-f859717be1ac'), 
('c8633eb9-ff79-11ed-a793-f859717be1ac', '4e9dd2fd-ff7c-11ed-a793-f859717be1ac'), 
('c8633eb9-ff79-11ed-a793-f859717be1ac', '4e9e210c-ff7c-11ed-a793-f859717be1ac'), 
('c8633eb9-ff79-11ed-a793-f859717be1ac', '4e9e7a14-ff7c-11ed-a793-f859717be1ac'), 
('c8633eb9-ff79-11ed-a793-f859717be1ac', '4e9eca8d-ff7c-11ed-a793-f859717be1ac'), 
('c8633eb9-ff79-11ed-a793-f859717be1ac', '4e9f26c9-ff7c-11ed-a793-f859717be1ac')`);


    // Home Owner’s Insurance

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c863b40e-ff79-11ed-a793-f859717be1ac', '4de90d0c-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4dea2ebe-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4deaa5cc-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4deb1aea-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4deb88c4-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4dec87e4-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4dece21e-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4ded3c66-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4ded9eed-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4e9fbf6b-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4ea029d3-ff7c-11ed-a793-f859717be1ac'), 
('c863b40e-ff79-11ed-a793-f859717be1ac', '4ea0fcb4-ff7c-11ed-a793-f859717be1ac') `);


    // Home Shopping Networks

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c864303e-ff79-11ed-a793-f859717be1ac', '4ea25d9b-ff7c-11ed-a793-f859717be1ac'), 
('c864303e-ff79-11ed-a793-f859717be1ac', '4ea2af47-ff7c-11ed-a793-f859717be1ac'), 
('c864303e-ff79-11ed-a793-f859717be1ac', '4ea31af0-ff7c-11ed-a793-f859717be1ac'), 
('c864303e-ff79-11ed-a793-f859717be1ac', '4ea3897f-ff7c-11ed-a793-f859717be1ac'), 
('c864303e-ff79-11ed-a793-f859717be1ac', '4ea3e14a-ff7c-11ed-a793-f859717be1ac'), 
('c864303e-ff79-11ed-a793-f859717be1ac', '4ea42bc8-ff7c-11ed-a793-f859717be1ac'), 
('c864303e-ff79-11ed-a793-f859717be1ac', '4ea4a86a-ff7c-11ed-a793-f859717be1ac')`);


    // Hotels and Motels

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c864645c-ff79-11ed-a793-f859717be1ac', '4ea50c2e-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea557e8-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea5b3b6-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea62590-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea691fb-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea6dd0c-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea72dac-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea77d65-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea7d324-ff7c-11ed-a793-f859717be1ac'), 
('c864645c-ff79-11ed-a793-f859717be1ac', '4ea826a8-ff7c-11ed-a793-f859717be1ac')`);


    // Internet Service Providers

    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8649548-ff79-11ed-a793-f859717be1ac', '4e1d9eab-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4e224ae0-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4ea8a7ab-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4ea90440-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4ea95d6c-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4ea9aa98-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4eaa073a-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4eaa638c-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4eaabd77-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4eab05c5-ff7c-11ed-a793-f859717be1ac'), 
('c8649548-ff79-11ed-a793-f859717be1ac', '4eab50db-ff7c-11ed-a793-f859717be1ac')`);



    // Jewelry
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c864c9a2-ff79-11ed-a793-f859717be1ac', '4eabd58c-ff7c-11ed-a793-f859717be1ac'), 
('c864c9a2-ff79-11ed-a793-f859717be1ac', '4eac431d-ff7c-11ed-a793-f859717be1ac'), 
('c864c9a2-ff79-11ed-a793-f859717be1ac', '4eacadb1-ff7c-11ed-a793-f859717be1ac'), 
('c864c9a2-ff79-11ed-a793-f859717be1ac', '4ead083c-ff7c-11ed-a793-f859717be1ac'), 
('c864c9a2-ff79-11ed-a793-f859717be1ac', '4ead60ca-ff7c-11ed-a793-f859717be1ac'), 
('c864c9a2-ff79-11ed-a793-f859717be1ac', '4eada507-ff7c-11ed-a793-f859717be1ac'), 
('c864c9a2-ff79-11ed-a793-f859717be1ac', '4eae0300-ff7c-11ed-a793-f859717be1ac'), 
('c864c9a2-ff79-11ed-a793-f859717be1ac', '4eae694a-ff7c-11ed-a793-f859717be1ac')`);


    // Kitchen and Cooking
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c865078c-ff79-11ed-a793-f859717be1ac', '4eaec908-ff7c-11ed-a793-f859717be1ac'),  
('c865078c-ff79-11ed-a793-f859717be1ac', '4eaf2b7b-ff7c-11ed-a793-f859717be1ac'),  
('c865078c-ff79-11ed-a793-f859717be1ac', '4eaf8fdf-ff7c-11ed-a793-f859717be1ac'),  
('c865078c-ff79-11ed-a793-f859717be1ac', '4eaffedf-ff7c-11ed-a793-f859717be1ac'),  
('c865078c-ff79-11ed-a793-f859717be1ac', '4eb045d5-ff7c-11ed-a793-f859717be1ac')`);


    // Kids
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86546fb-ff79-11ed-a793-f859717be1ac', '4dff96d7-ff7c-11ed-a793-f859717be1ac'), 
('c86546fb-ff79-11ed-a793-f859717be1ac', '4e007564-ff7c-11ed-a793-f859717be1ac'), 
('c86546fb-ff79-11ed-a793-f859717be1ac', '4eb08da4-ff7c-11ed-a793-f859717be1ac'), 
('c86546fb-ff79-11ed-a793-f859717be1ac', '4eb1b3bd-ff7c-11ed-a793-f859717be1ac')`);


    // Kid’s Clothing
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86588d8-ff79-11ed-a793-f859717be1ac', '4e03630b-ff7c-11ed-a793-f859717be1ac'), 
('c86588d8-ff79-11ed-a793-f859717be1ac', '4eb24616-ff7c-11ed-a793-f859717be1ac'), 
('c86588d8-ff79-11ed-a793-f859717be1ac', '4eb2ebba-ff7c-11ed-a793-f859717be1ac'), 
('c86588d8-ff79-11ed-a793-f859717be1ac', '4eb37157-ff7c-11ed-a793-f859717be1ac'), 
('c86588d8-ff79-11ed-a793-f859717be1ac', '4eb3c234-ff7c-11ed-a793-f859717be1ac')`);


    // Laundry
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c865c715-ff79-11ed-a793-f859717be1ac', '4eb419aa-ff7c-11ed-a793-f859717be1ac'), 
('c865c715-ff79-11ed-a793-f859717be1ac', '4eb464c4-ff7c-11ed-a793-f859717be1ac'), 
('c865c715-ff79-11ed-a793-f859717be1ac', '4eb4b953-ff7c-11ed-a793-f859717be1ac'), 
('c865c715-ff79-11ed-a793-f859717be1ac', '4eb5006d-ff7c-11ed-a793-f859717be1ac'), 
('c865c715-ff79-11ed-a793-f859717be1ac', '4eb5575a-ff7c-11ed-a793-f859717be1ac')`);


    // Legal
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8660234-ff79-11ed-a793-f859717be1ac', '4eb5f769-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb64562-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb695e3-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb6fe7c-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb774bc-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb7caa3-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb82243-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb892ec-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb8ef0c-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb93e4e-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb9a9ac-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eb9f698-ff7c-11ed-a793-f859717be1ac'),  
('c8660234-ff79-11ed-a793-f859717be1ac', '4eba3a60-ff7c-11ed-a793-f859717be1ac')`);


    // Life Insurance
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c866331d-ff79-11ed-a793-f859717be1ac', '4deb1aea-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4dec87e4-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4eba8a1e-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebad191-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebb1a80-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebba7e3-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebc2083-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebc6bd3-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebcbdc1-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebd171b-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebd9f43-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebdf01f-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebe4714-ff7c-11ed-a793-f859717be1ac'), 
('c866331d-ff79-11ed-a793-f859717be1ac', '4ebeeb99-ff7c-11ed-a793-f859717be1ac')`);


    // Medical and Urgent Care
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c866a923-ff79-11ed-a793-f859717be1ac', '4ebfd7cf-ff7c-11ed-a793-f859717be1ac'), 
('c866a923-ff79-11ed-a793-f859717be1ac', '4ebf87ec-ff7c-11ed-a793-f859717be1ac'), 
('c866a923-ff79-11ed-a793-f859717be1ac', '4ec034c6-ff7c-11ed-a793-f859717be1ac'), 
('c866a923-ff79-11ed-a793-f859717be1ac', '4ec095fe-ff7c-11ed-a793-f859717be1ac'), 
('c866a923-ff79-11ed-a793-f859717be1ac', '4ec0de1c-ff7c-11ed-a793-f859717be1ac'), 
('c866a923-ff79-11ed-a793-f859717be1ac', '4ec12e59-ff7c-11ed-a793-f859717be1ac'), 
('c866a923-ff79-11ed-a793-f859717be1ac', '4ec1b776-ff7c-11ed-a793-f859717be1ac'), 
('c866a923-ff79-11ed-a793-f859717be1ac', '4ec20c8b-ff7c-11ed-a793-f859717be1ac') `);


    // Box Subscriptions
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec26a58-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec2b73f-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec300ae-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec35ba6-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec3dc12-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec4c547-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec52131-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec58bc2-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec69e7f-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec6f21d-ff7c-11ed-a793-f859717be1ac'), 
('c866eafd-ff79-11ed-a793-f859717be1ac', '4ec73f5a-ff7c-11ed-a793-f859717be1ac')`);



    // Marketplaces
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e108993-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e3b82c0-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e3bfd85-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e557329-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e60d276-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e6120b7-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e62f375-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e960f9b-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4e97fc69-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ec7db51-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ec84025-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ec89203-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ec8e782-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ec9459d-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ec99a51-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ec9e790-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ecafd05-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ecc1477-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ecc6ea3-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ecd731f-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ece8378-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ecedcc3-ff7c-11ed-a793-f859717be1ac'), 
('c8673ea7-ff79-11ed-a793-f859717be1ac', '4ecf9aee-ff7c-11ed-a793-f859717be1ac')`);


    // Learning
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
('c8677c43-ff79-11ed-a793-f859717be1ac', '4e352224-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ecff9bd-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed04c8a-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed09727-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed10766-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed16802-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed21b6d-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed26f76-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed2c8f5-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed36646-ff7c-11ed-a793-f859717be1ac'),
('c8677c43-ff79-11ed-a793-f859717be1ac', '4ed3d925-ff7c-11ed-a793-f859717be1ac')`);


    // Meal Delivery Services
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed434d9-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed49ddc-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed4f7b4-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed5547b-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed5b0bb-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed5fd4a-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed66087-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed6b247-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed71a26-ff7c-11ed-a793-f859717be1ac'),
('c867b8f3-ff79-11ed-a793-f859717be1ac', '4ed78746-ff7c-11ed-a793-f859717be1ac')`);


    // Movers and Moving
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c867f30c-ff79-11ed-a793-f859717be1ac', '4ed7e708-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4ed844c6-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4ed89539-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4ed8ec03-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4ed941a8-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4ed99a1b-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4ed9ed7f-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4eda6512-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4edad28a-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4edb2ca5-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4edb6eed-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4edbbef1-ff7c-11ed-a793-f859717be1ac'),
('c867f30c-ff79-11ed-a793-f859717be1ac', '4edc1bae-ff7c-11ed-a793-f859717be1ac')`);


    // Movie Theaters
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8683a23-ff79-11ed-a793-f859717be1ac', '4edc6827-ff7c-11ed-a793-f859717be1ac'),
('c8683a23-ff79-11ed-a793-f859717be1ac', '4edcb041-ff7c-11ed-a793-f859717be1ac'),
('c8683a23-ff79-11ed-a793-f859717be1ac', '4edd0bbf-ff7c-11ed-a793-f859717be1ac'),
('c8683a23-ff79-11ed-a793-f859717be1ac', '4edd6729-ff7c-11ed-a793-f859717be1ac'),
('c8683a23-ff79-11ed-a793-f859717be1ac', '4eddfefb-ff7c-11ed-a793-f859717be1ac'),
('c8683a23-ff79-11ed-a793-f859717be1ac', '4ede5f65-ff7c-11ed-a793-f859717be1ac'),
('c8683a23-ff79-11ed-a793-f859717be1ac', '4edeb515-ff7c-11ed-a793-f859717be1ac'),
('c8683a23-ff79-11ed-a793-f859717be1ac', '4edf076a-ff7c-11ed-a793-f859717be1ac'),
('c8683a23-ff79-11ed-a793-f859717be1ac', '4edf6374-ff7c-11ed-a793-f859717be1ac')`);


    // Pet Supplies
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES  
  ('c86879fa-ff79-11ed-a793-f859717be1ac', '4ee053ab-ff7c-11ed-a793-f859717be1ac'),
('c86879fa-ff79-11ed-a793-f859717be1ac', '4ee11323-ff7c-11ed-a793-f859717be1ac'),
('c86879fa-ff79-11ed-a793-f859717be1ac', '4ee16e8b-ff7c-11ed-a793-f859717be1ac'),
('c86879fa-ff79-11ed-a793-f859717be1ac', '4ee1b8f9-ff7c-11ed-a793-f859717be1ac')`);


    // Pharmacies
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
('c868b880-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac'),
('c868b880-ff79-11ed-a793-f859717be1ac', '4e1373c9-ff7c-11ed-a793-f859717be1ac'),
('c868b880-ff79-11ed-a793-f859717be1ac', '4ee2a439-ff7c-11ed-a793-f859717be1ac'),
('c868b880-ff79-11ed-a793-f859717be1ac', '4ee350b4-ff7c-11ed-a793-f859717be1ac'),
('c868b880-ff79-11ed-a793-f859717be1ac', '4ee39ab6-ff7c-11ed-a793-f859717be1ac'),
('c868b880-ff79-11ed-a793-f859717be1ac', '4ee40b5b-ff7c-11ed-a793-f859717be1ac')
`);
    // Real Estate
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c868df3a-ff79-11ed-a793-f859717be1ac', '4de67118-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4de7fe70-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee4bae8-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee5179e-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee56e20-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee5c2b1-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee613f4-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee68c2d-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee6fcc1-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee75e79-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee7af82-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee810e0-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee8590e-ff7c-11ed-a793-f859717be1ac'),
('c868df3a-ff79-11ed-a793-f859717be1ac', '4ee8caf4-ff7c-11ed-a793-f859717be1ac')
  
  `);



    // Real Estate Agents
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c8690680-ff79-11ed-a793-f859717be1ac', '4de67118-ff7c-11ed-a793-f859717be1ac'),
('c8690680-ff79-11ed-a793-f859717be1ac', '4de78e7f-ff7c-11ed-a793-f859717be1ac'),
('c8690680-ff79-11ed-a793-f859717be1ac', '4ee9773d-ff7c-11ed-a793-f859717be1ac'),
('c8690680-ff79-11ed-a793-f859717be1ac', '4ee9e2ca-ff7c-11ed-a793-f859717be1ac'),
('c8690680-ff79-11ed-a793-f859717be1ac', '4eeab607-ff7c-11ed-a793-f859717be1ac'),
('c8690680-ff79-11ed-a793-f859717be1ac', '4eeb0f32-ff7c-11ed-a793-f859717be1ac'),
('c8690680-ff79-11ed-a793-f859717be1ac', '4eeb5fda-ff7c-11ed-a793-f859717be1ac')

  
  `);
    // Renters Insurance
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c869465d-ff79-11ed-a793-f859717be1ac', '4de90d0c-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4de9d8be-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4dea2ebe-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4deaa5cc-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4deb1aea-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4deb88c4-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4dec87e4-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4dece21e-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4ded3c66-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4ded9eed-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4e53f951-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4e9fbf6b-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4ea0fcb4-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4eec6a58-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4eed4fac-ff7c-11ed-a793-f859717be1ac'),
('c869465d-ff79-11ed-a793-f859717be1ac', '4eeeb244-ff7c-11ed-a793-f859717be1ac')
  
  `);
    // Ride Hail and Car Sharing
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86997db-ff79-11ed-a793-f859717be1ac', '4eef7738-ff7c-11ed-a793-f859717be1ac'),
('c86997db-ff79-11ed-a793-f859717be1ac', '4eefd197-ff7c-11ed-a793-f859717be1ac'),
('c86997db-ff79-11ed-a793-f859717be1ac', '4ef03132-ff7c-11ed-a793-f859717be1ac'),
('c86997db-ff79-11ed-a793-f859717be1ac', '4ef07c45-ff7c-11ed-a793-f859717be1ac'),
('c86997db-ff79-11ed-a793-f859717be1ac', '4ef0cc32-ff7c-11ed-a793-f859717be1ac'),
('c86997db-ff79-11ed-a793-f859717be1ac', '4ef12242-ff7c-11ed-a793-f859717be1ac'),
('c86997db-ff79-11ed-a793-f859717be1ac', '4ef175f1-ff7c-11ed-a793-f859717be1ac')`);
    // Restaurants
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef1d08c-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef26379-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef32725-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef3877d-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef458a1-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef4cc0d-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef519e3-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef5f928-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef679b6-ff7c-11ed-a793-f859717be1ac'),
('c869ce9a-ff79-11ed-a793-f859717be1ac', '4ef76da5-ff7c-11ed-a793-f859717be1ac')`);


    // Shipping
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c869f635-ff79-11ed-a793-f859717be1ac', '4ef82e62-ff7c-11ed-a793-f859717be1ac'),
('c869f635-ff79-11ed-a793-f859717be1ac', '4ef87b8b-ff7c-11ed-a793-f859717be1ac'),
('c869f635-ff79-11ed-a793-f859717be1ac', '4ef8e283-ff7c-11ed-a793-f859717be1ac'),
('c869f635-ff79-11ed-a793-f859717be1ac', '4ef9522b-ff7c-11ed-a793-f859717be1ac') `);


    // Outdoor Recreation, Sporting and Camping
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4ef9ba92-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efa0548-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efa5fe5-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efb0156-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efb4c46-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efba8ea-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efc2d87-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efc918b-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efcdb0d-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efd3057-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efd940b-ff7c-11ed-a793-f859717be1ac'),
('c86a1b4a-ff79-11ed-a793-f859717be1ac', '4efdec4e-ff7c-11ed-a793-f859717be1ac')`);


    // Shoes
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86a6d23-ff79-11ed-a793-f859717be1ac', '4e50cb2d-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4e5e6663-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4efcdb0d-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4efe7264-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4efed6e7-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4eff7536-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4effbe0b-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4f00096b-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4f004ebf-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4f0101b9-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4f0153b8-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4f01a633-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4f020fee-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4f0284b3-ff7c-11ed-a793-f859717be1ac'),
('c86a6d23-ff79-11ed-a793-f859717be1ac', '4f02dbe5-ff7c-11ed-a793-f859717be1ac')`);


    // Storage

      await queryRunner.query(`
    INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
    VALUES
     ('c86a942c-ff79-11ed-a793-f859717be1ac', '4f034ef5-ff7c-11ed-a793-f859717be1ac'),
    ('c86a942c-ff79-11ed-a793-f859717be1ac', '4f0396c2-ff7c-11ed-a793-f859717be1ac'),
    ('c86a942c-ff79-11ed-a793-f859717be1ac', '4f03e2a0-ff7c-11ed-a793-f859717be1ac'),
    ('c86a942c-ff79-11ed-a793-f859717be1ac', '4f043d7a-ff7c-11ed-a793-f859717be1ac'),
    ('c86a942c-ff79-11ed-a793-f859717be1ac', '4f049252-ff7c-11ed-a793-f859717be1ac'),
    ('c86a942c-ff79-11ed-a793-f859717be1ac', '4f04e675-ff7c-11ed-a793-f859717be1ac')`);





//Therapy
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c86ac47e-ff79-11ed-a793-f859717be1ac', '4f055e88-ff7c-11ed-a793-f859717be1ac'),
    ('c86ac47e-ff79-11ed-a793-f859717be1ac', '4f05cda7-ff7c-11ed-a793-f859717be1ac'),
    ('c86ac47e-ff79-11ed-a793-f859717be1ac', '4f06234d-ff7c-11ed-a793-f859717be1ac'),
    ('c86ac47e-ff79-11ed-a793-f859717be1ac', '4f066ab9-ff7c-11ed-a793-f859717be1ac'),
    ('c86ac47e-ff79-11ed-a793-f859717be1ac', '4f06b521-ff7c-11ed-a793-f859717be1ac'),
    ('c86ac47e-ff79-11ed-a793-f859717be1ac', '4f06fffa-ff7c-11ed-a793-f859717be1ac')`);


//Ticket Marketplaces
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c86aee41-ff79-11ed-a793-f859717be1ac', '4f074e20-ff7c-11ed-a793-f859717be1ac'),
    ('c86aee41-ff79-11ed-a793-f859717be1ac', '4f07a4e2-ff7c-11ed-a793-f859717be1ac'),
    ('c86aee41-ff79-11ed-a793-f859717be1ac', '4f07f614-ff7c-11ed-a793-f859717be1ac'),
    ('c86aee41-ff79-11ed-a793-f859717be1ac', '4f084eb5-ff7c-11ed-a793-f859717be1ac'),
    ('c86aee41-ff79-11ed-a793-f859717be1ac', '4f08b48d-ff7c-11ed-a793-f859717be1ac'),
    ('c86aee41-ff79-11ed-a793-f859717be1ac', '4f091a80-ff7c-11ed-a793-f859717be1ac')`);



//Travel and Booking
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f09b461-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0a41f8-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0aae20-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0b159d-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0b799a-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0bcc7b-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0c2ea5-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0cc220-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0d1d07-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4f0d6ef2-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4ea7d324-ff7c-11ed-a793-f859717be1ac'),
    ('c86b19eb-ff79-11ed-a793-f859717be1ac', '4ea826a8-ff7c-11ed-a793-f859717be1ac')`);


    // Music Streaming
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f0dbc70-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f0e13e1-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f0e7569-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f0edcff-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f0f70b6-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f0fd28d-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f1085b5-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f10e3de-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f116d38-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f11e8e4-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f1263a8-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4f12d45c-ff7c-11ed-a793-f859717be1ac'),
    ('c86b4cd8-ff79-11ed-a793-f859717be1ac', '4eabd58c-ff7c-11ed-a793-f859717be1ac')`);


    // Vacation Packages
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86b7327-ff79-11ed-a793-f859717be1ac', '4f132362-ff7c-11ed-a793-f859717be1ac'),
  ('c86b7327-ff79-11ed-a793-f859717be1ac', '4f137dc6-ff7c-11ed-a793-f859717be1ac'),
  ('c86b7327-ff79-11ed-a793-f859717be1ac', '4f143ce5-ff7c-11ed-a793-f859717be1ac'),
  ('c86b7327-ff79-11ed-a793-f859717be1ac', '4f0d6ef2-ff7c-11ed-a793-f859717be1ac'),
  ('c86b7327-ff79-11ed-a793-f859717be1ac', '4f0a41f8-ff7c-11ed-a793-f859717be1ac') `);


    // Vacation Rentals
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
    ('c86b9dd4-ff79-11ed-a793-f859717be1ac', '4f14a7f9-ff7c-11ed-a793-f859717be1ac'),
    ('c86b9dd4-ff79-11ed-a793-f859717be1ac', '4f1555e3-ff7c-11ed-a793-f859717be1ac'),
    ('c86b9dd4-ff79-11ed-a793-f859717be1ac', '4f159f24-ff7c-11ed-a793-f859717be1ac'),
    ('c86b9dd4-ff79-11ed-a793-f859717be1ac', '4f15ef0c-ff7c-11ed-a793-f859717be1ac'),
    ('c86b9dd4-ff79-11ed-a793-f859717be1ac', '4ea7d324-ff7c-11ed-a793-f859717be1ac')`);



    // Veterinarians, Pet Insurance and Pet Care
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
('c86bcfcb-ff79-11ed-a793-f859717be1ac', '4f164c19-ff7c-11ed-a793-f859717be1ac'),
('c86bcfcb-ff79-11ed-a793-f859717be1ac', '4f16a6e1-ff7c-11ed-a793-f859717be1ac'),
('c86bcfcb-ff79-11ed-a793-f859717be1ac', '4f17211c-ff7c-11ed-a793-f859717be1ac'),
('c86bcfcb-ff79-11ed-a793-f859717be1ac', '4f1789dd-ff7c-11ed-a793-f859717be1ac'),
('c86bcfcb-ff79-11ed-a793-f859717be1ac', '4f17f23a-ff7c-11ed-a793-f859717be1ac'),
('c86bcfcb-ff79-11ed-a793-f859717be1ac', '4f185154-ff7c-11ed-a793-f859717be1ac'),
('c86bcfcb-ff79-11ed-a793-f859717be1ac', '4dec87e4-ff7c-11ed-a793-f859717be1ac')`);

    // Video Games
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  
  ('c86bfcd1-ff79-11ed-a793-f859717be1ac', '4f18f903-ff7c-11ed-a793-f859717be1ac'),
('c86bfcd1-ff79-11ed-a793-f859717be1ac', '4f195578-ff7c-11ed-a793-f859717be1ac'),
('c86bfcd1-ff79-11ed-a793-f859717be1ac', '4f19b5db-ff7c-11ed-a793-f859717be1ac'),
('c86bfcd1-ff79-11ed-a793-f859717be1ac', '4f1a0c11-ff7c-11ed-a793-f859717be1ac'),
('c86bfcd1-ff79-11ed-a793-f859717be1ac', '4f1a73f2-ff7c-11ed-a793-f859717be1ac'),
('c86bfcd1-ff79-11ed-a793-f859717be1ac', '4e400d34-ff7c-11ed-a793-f859717be1ac'),
('c86bfcd1-ff79-11ed-a793-f859717be1ac', '4e3fa480-ff7c-11ed-a793-f859717be1ac') `);

    // Wine
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
  ('c86c3794-ff79-11ed-a793-f859717be1ac', '4f1addbd-ff7c-11ed-a793-f859717be1ac'),
('c86c3794-ff79-11ed-a793-f859717be1ac', '4f1b4fac-ff7c-11ed-a793-f859717be1ac'),
('c86c3794-ff79-11ed-a793-f859717be1ac', '4f1bac18-ff7c-11ed-a793-f859717be1ac'),
('c86c3794-ff79-11ed-a793-f859717be1ac', '4f1c03a4-ff7c-11ed-a793-f859717be1ac'),
('c86c3794-ff79-11ed-a793-f859717be1ac', '4f1c5a8f-ff7c-11ed-a793-f859717be1ac') `);

    // Weddings and Parties
    await queryRunner.query(`
  INSERT INTO categories_sellers_sellers (categoriesid, sellersid)
  VALUES
 ('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1ca703-ff7c-11ed-a793-f859717be1ac'),
('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1cff20-ff7c-11ed-a793-f859717be1ac'),
('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1d4f33-ff7c-11ed-a793-f859717be1ac'),
('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1dbd35-ff7c-11ed-a793-f859717be1ac'),
('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1e3f43-ff7c-11ed-a793-f859717be1ac'),
('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1e899f-ff7c-11ed-a793-f859717be1ac'),
('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1ee7c6-ff7c-11ed-a793-f859717be1ac'),
('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1f5ee4-ff7c-11ed-a793-f859717be1ac'),
('c86c6b47-ff79-11ed-a793-f859717be1ac', '4f1fb73d-ff7c-11ed-a793-f859717be1ac')

  
  `);


  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
    // Rollback logic (if required) goes here
  }
}


