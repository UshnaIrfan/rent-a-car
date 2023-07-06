import { MigrationInterface, QueryRunner } from "typeorm";

export class createDefaultSchemaMigration1685179560897 implements MigrationInterface {
  name = 'createDefaultSchemaMigration1685179560897'

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.query(`CREATE TABLE sellers (id varchar(36) NOT NULL UNIQUE DEFAULT (uuid()),sellerName varchar(255) NULL,sellerUrl varchar(255) NULL,approvedByAdmin enum('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',isListing tinyint NOT NULL, createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX IDX_879ac4347c0fb621f2777f8196 (sellerUrl),PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=1`);
        await queryRunner.query(`CREATE TABLE categories ( id varchar(36) NOT NULL UNIQUE DEFAULT (uuid()), categoryName varchar(255) NULL,approvedByAdmin enum('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending', createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX IDX_f46afc39e51f518a78cbe94cb9 (categoryName),PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=1`);
        await queryRunner.query(`CREATE TABLE categories_sellers_sellers ( categoriesId varchar(36) NOT NULL ,sellersId varchar(36) NOT NULL, INDEX IDX_d5378757c8579625f1e3badae2 (categoriesId), INDEX IDX_5242ebea3bb31a9ec6420502fb (sellersId), PRIMARY KEY (categoriesId, sellersId)) ENGINE=InnoDB AUTO_INCREMENT=1`);
        await queryRunner.query(`CREATE TABLE clicksTypes ( id varchar(36) NOT NULL UNIQUE DEFAULT (uuid()),type varchar(255) NOT NULL,createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX IDX_42895ddb79e97eaebca76fec95 (type),PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=1`);
        await queryRunner.query(`CREATE TABLE clicksTitle (id varchar(36) NOT NULL UNIQUE DEFAULT (uuid()),slug varchar(255) NOT NULL,title varchar(255) NOT NULL,type varchar(255) NOT NULL,image longtext NULL,imageName varchar(255) NOT NULL,createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX IDX_83b38ee8f43412f04132d89a9d (slug),UNIQUE INDEX IDX_19f30566911ed0c3090d676287 (title),PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=1`);
        await queryRunner.query(`CREATE TABLE users (id varchar(36) NOT NULL UNIQUE DEFAULT (uuid()),name varchar(255) NOT NULL, username varchar(255) NOT NULL,email varchar(255) NOT NULL, password varchar(255) NOT NULL, roles varchar(255) NULL DEFAULT 'L2A_USER',status enum('active', 'inactive') NOT NULL DEFAULT 'inactive',blockStatus enum('block', 'unblock') NOT NULL DEFAULT 'unblock',profileIcon longtext NULL, createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX IDX_fe0bb3f6520ee0469504521e71 (username), UNIQUE INDEX IDX_97672ac88f789774dd47f7c8be (email),PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=1`);
        await queryRunner.query(`CREATE TABLE review (id varchar(36) NOT NULL UNIQUE DEFAULT (uuid()),sellerId varchar(255) NOT NULL, titleId varchar(255) NULL,titleSlug varchar(255) NULL,type varchar(255) NULL, message longtext NULL, userId varchar(255) NOT NULL,approvedByAdmin tinyint NOT NULL,bestWriter tinyint NOT NULL, createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=1`);
        await queryRunner.query(`CREATE TABLE likeDislike ( id varchar(36) NOT NULL UNIQUE DEFAULT (uuid()), userId varchar(255) NOT NULL, reviewId varchar(255) NOT NULL, type enum('like', 'dislike', 'report') NOT NULL, createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=1`);
    }


    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.query(`DROP TABLE categories_sellers_sellers`);
        await queryRunner.query(`DROP TABLE categories`);
        await queryRunner.query(`DROP TABLE sellers`);
        await queryRunner.query(`DROP TABLE clicksTitle`);
        await queryRunner.query(`DROP TABLE users`);
        await queryRunner.query(`DROP TABLE review`);
        await queryRunner.query(`DROP TABLE likeDislike`);
    }

}
