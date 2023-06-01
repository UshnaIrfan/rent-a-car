import { MigrationInterface, QueryRunner } from "typeorm";

export class createInitialSellersCategoriesSeeder16851795608100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void>
  {
    // Create categories_sellers_sellers

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
    ('c857c8ea-ff79-11ed-a793-f859717be1ac', '4dd7e2bd-ff7c-11ed-a793-f859717be1ac'),
    
    
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
    ('c857ffb9-ff79-11ed-a793-f859717be1ac', '4ddd5c2d-ff7c-11ed-a793-f859717be1ac'),



    ('c85846af-ff79-11ed-a793-f859717be1ac', '4dddcaa0-ff7c-11ed-a793-f859717be1ac'),
    ('c85846af-ff79-11ed-a793-f859717be1ac', '4dde416f-ff7c-11ed-a793-f859717be1ac'),
    ('c85846af-ff79-11ed-a793-f859717be1ac', '4ddeb9ce-ff7c-11ed-a793-f859717be1ac'),
    ('c85846af-ff79-11ed-a793-f859717be1ac', '4ddf309d-ff7c-11ed-a793-f859717be1ac'),


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
    ('c85897af-ff79-11ed-a793-f859717be1ac', '4de5b40e-ff7c-11ed-a793-f859717be1ac'),



     ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de613af-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de67118-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de6c9b3-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de72457-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de78e7f-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de7fe70-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de85679-ff7c-11ed-a793-f859717be1ac'),
    ('c858e49c-ff79-11ed-a793-f859717be1ac', '4de8aa5f-ff7c-11ed-a793-f859717be1ac'),



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
    ('c8595bcc-ff79-11ed-a793-f859717be1ac', '4dee0d55-ff7c-11ed-a793-f859717be1ac'+




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
    ('c8599b7d-ff79-11ed-a793-f859717be1ac', '4df5bed3-ff7c-11ed-a793-f859717be1ac'),



   "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df60e11-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df695ac-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df70dad-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df7860c-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df7e60b-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df863e5-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df8bac6-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df90c34-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df95173-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4df9aed5-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4dfa1ec9-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4dfa9fe4-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4dfb0ea7-ff7c-11ed-a793-f859717be1ac')," +
    "('c859d77c-ff79-11ed-a793-f859717be1ac', '4dfb6bb8-ff7c-11ed-a793-f859717be1ac')"+


    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfbca94-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfc22c4-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfc7651-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfccda1-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfd3ed3-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfdd179-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfe2a71-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfe847a-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a1613-ff79-11ed-a793-f859717be1ac', '4dfeda0f-ff7c-11ed-a793-f859717be1ac')"+


    "('c85a54ad-ff79-11ed-a793-f859717be1ac', '4dff40f1-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a54ad-ff79-11ed-a793-f859717be1ac', '4dff96d7-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a54ad-ff79-11ed-a793-f859717be1ac', '4dfffa6d-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a54ad-ff79-11ed-a793-f859717be1ac', '4e007564-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a54ad-ff79-11ed-a793-f859717be1ac', '4e00d449-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a54ad-ff79-11ed-a793-f859717be1ac', '4e0126cf-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a54ad-ff79-11ed-a793-f859717be1ac', '4e017bd2-ff7c-11ed-a793-f859717be1ac')"+

  "('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e017bd2-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e01da77-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e027513-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e02dc0e-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e03630b-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e03e8c6-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e049487-ff7c-11ed-a793-f859717be1ac')," +
    "('c85a93f8-ff79-11ed-a793-f859717be1ac', '4e04eb59-ff7c-11ed-a793-f859717be1ac')"+


    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4e0613b8-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4e069b11-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4e0728ed-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4e078b3b-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4e082b70-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4e088173-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4df13554-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4df1a9a3-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4df5bed3-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4df29f4c-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4df3177c-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4def9a31-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ad092-ff79-11ed-a793-f859717be1ac', '4df389b1-ff7c-11ed-a793-f859717be1ac')"+


     "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e08fe0d-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e095b33-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e09b8c0-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0a17aa-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0a81e8-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0ad8ba-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0b6c07-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0bd088-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0c3a92-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0d0f55-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b19cf-ff79-11ed-a793-f859717be1ac', '4e0d7dbc-ff7c-11ed-a793-f859717be1ac')"+


    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e0de4bb-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e0e506d-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e0ecaad-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e0f3d93-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e102588-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e108993-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e1179a5-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e11cdce-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e122875-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e129a5d-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b592d-ff79-11ed-a793-f859717be1ac', '4e130808-ff7c-11ed-a793-f859717be1ac')"+


     "('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e1373c9-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e13ce05-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e149ab4-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e14ef0c-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e15d0f6-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e1113ca-ff7c-11ed-a793-f859717be1ac')," +
    "('c85b91dd-ff79-11ed-a793-f859717be1ac', '4e108993-ff7c-11ed-a793-f859717be1ac')"+


    "('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e163ef7-ff7c-11ed-a793-f859717be1ac')," +
    "('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e1698a4-ff7c-11ed-a793-f859717be1ac')," +
    "('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e170470-ff7c-11ed-a793-f859717be1ac')," +
    "('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e1788f7-ff7c-11ed-a793-f859717be1ac')," +
    "('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e17e864-ff7c-11ed-a793-f859717be1ac')," +
    "('c85bd0d9-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac')"+


    "('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1844b7-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e18a1ae-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1907d6-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e199b4a-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1a063a-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1a62af-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1ab192-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c10d0-ff79-11ed-a793-f859717be1ac', '4e1afb7c-ff7c-11ed-a793-f859717be1ac')"+


    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1b52ef-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1bab55-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1c10a6-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1c8f94-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1cecfc-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1d4123-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1d9eab-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1df814-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1e89cf-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1edf22-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e1f82ac-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e200ceb-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e206ac8-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e20dff9-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e213489-ff7c-11ed-a793-f859717be1ac')")+
    "('c85c4849-ff79-11ed-a793-f859717be1ac', '4e15355f-ff7c-11ed-a793-f859717be1ac ')")+



     "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e1d4123-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e1d9eab-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e21813a-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e21e836-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e224ae0-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e22a4e3-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e22fab8-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e23536f-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e23bb6c-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e242e05-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e2494a3-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e255c05-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e25b1cf-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e260b7c-ff7c-11ed-a793-f859717be1ac')," +
    "('c85c7dad-ff79-11ed-a793-f859717be1ac', '4e2698a5-ff7c-11ed-a793-f859717be1ac')"+



    "('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e26ef53-ff7c-11ed-a793-f859717be1ac')," +
    "('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e274112-ff7c-11ed-a793-f859717be1ac')," +
    "('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e27994b-ff7c-11ed-a793-f859717be1ac')," +
    "('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e2877a2-ff7c-11ed-a793-f859717be1ac')," +
    "('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e28e00e-ff7c-11ed-a793-f859717be1ac')," +
    "('c85cb6c0-ff79-11ed-a793-f859717be1ac', '4e2939f1-ff7c-11ed-a793-f859717be1ac')"+


    "('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e298eb1-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e29ed07-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e2a48b2-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e2a9ac2-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e2af322-ff7c-11ed-a793-f859717be1ac')," +
    "('c85ce37b-ff79-11ed-a793-f859717be1ac', '4e2bac64-ff7c-11ed-a793-f859717be1ac')"+



     "('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2c1781-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2c9c4e-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2d2a43-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2d8403-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2deac7-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2e547e-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2ee69f-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4e2f45bc-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4df1a9a3-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4df29f4c-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4def9a31-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d113b-ff79-11ed-a793-f859717be1ac', '4df3177c-ff7c-11ed-a793-f859717be1ac')"+


    "('c85d5377-ff79-11ed-a793-f859717be1ac', '4e3023b7-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d5377-ff79-11ed-a793-f859717be1ac', '4e30754e-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d5377-ff79-11ed-a793-f859717be1ac', '4e30c90a-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d5377-ff79-11ed-a793-f859717be1ac', '4e312272-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d5377-ff79-11ed-a793-f859717be1ac', '4e318d90-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d5377-ff79-11ed-a793-f859717be1ac', '4e31f31e-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d5377-ff79-11ed-a793-f859717be1ac', '4e32486e-ff7c-11ed-a793-f859717be1ac')," +
    "('c85d5377-ff79-11ed-a793-f859717be1ac', '4e199b4a-ff7c-11ed-a793-f859717be1ac')"+



`);



  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
    // Rollback logic (if required) goes here
  }
}


