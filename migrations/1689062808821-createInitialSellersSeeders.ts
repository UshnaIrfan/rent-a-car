import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialSellersSeeders1689062808821 implements MigrationInterface {
    name = 'CreateInitialSellersSeeders1689062808821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`roles\` varchar(255) NULL DEFAULT 'L2A_USER', \`status\` enum ('active', 'inactive') NOT NULL DEFAULT 'inactive', \`blockStatus\` enum ('block', 'unblock') NOT NULL DEFAULT 'unblock', \`profileIcon\` longtext NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`likeDislike\` (\`id\` varchar(36) NOT NULL, \`userId\` varchar(255) NOT NULL, \`reviewId\` varchar(255) NOT NULL, \`type\` enum ('like', 'dislike', 'report') NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`review\` (\`id\` varchar(36) NOT NULL, \`sellerId\` varchar(255) NOT NULL, \`titleId\` varchar(255) NULL, \`titleSlug\` varchar(255) NULL, \`type\` varchar(255) NULL, \`message\` longtext NULL, \`userId\` varchar(255) NOT NULL, \`approvedByAdmin\` tinyint NOT NULL, \`bestWriter\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sellers\` (\`id\` varchar(36) NOT NULL, \`sellerName\` varchar(255) NULL, \`sellerUrl\` varchar(255) NULL, \`approvedByAdmin\` enum ('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending', \`type\` enum ('U.S. National, Regional & Online', 'For Local''s Only!', 'Outside the U.S.', 'B2B') NOT NULL DEFAULT 'U.S. National, Regional & Online', \`country\` varchar(255) NULL, \`city\` varchar(255) NULL, \`state\` varchar(255) NULL, \`address\` varchar(255) NULL, \`isListing\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_8e4d37f39078d9eab65cc9816b\` (\`sellerName\`), UNIQUE INDEX \`IDX_879ac4347c0fb621f2777f8196\` (\`sellerUrl\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` varchar(36) NOT NULL, \`categoryName\` varchar(255) NULL, \`approvedByAdmin\` enum ('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_f46afc39e51f518a78cbe94cb9\` (\`categoryName\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`contact_us\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`message\` varchar(255) NOT NULL, \`status\` enum ('inreview', 'complete', 'pending') NOT NULL DEFAULT 'pending', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mail_chip\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clicksTypes\` (\`id\` varchar(36) NOT NULL, \`type\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_42895ddb79e97eaebca76fec95\` (\`type\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clicksTitle\` (\`id\` varchar(36) NOT NULL, \`slug\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`image\` longtext NULL, \`imageName\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_83b38ee8f43412f04132d89a9d\` (\`slug\`), UNIQUE INDEX \`IDX_19f30566911ed0c3090d676287\` (\`title\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categories_sellers_sellers\` (\`categoriesId\` varchar(36) NOT NULL, \`sellersId\` varchar(36) NOT NULL, INDEX \`IDX_d5378757c8579625f1e3badae2\` (\`categoriesId\`), INDEX \`IDX_5242ebea3bb31a9ec6420502fb\` (\`sellersId\`), PRIMARY KEY (\`categoriesId\`, \`sellersId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`likeDislike\` ADD CONSTRAINT \`FK_4b19ad4d2abce86ad7c33998462\` FOREIGN KEY (\`reviewId\`) REFERENCES \`review\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_1337f93918c70837d3cea105d39\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_4afd4e629c7e065272b3932617d\` FOREIGN KEY (\`sellerId\`) REFERENCES \`sellers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`categories_sellers_sellers\` ADD CONSTRAINT \`FK_d5378757c8579625f1e3badae2a\` FOREIGN KEY (\`categoriesId\`) REFERENCES \`categories\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`categories_sellers_sellers\` ADD CONSTRAINT \`FK_5242ebea3bb31a9ec6420502fb0\` FOREIGN KEY (\`sellersId\`) REFERENCES \`sellers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`categories_sellers_sellers\` DROP FOREIGN KEY \`FK_5242ebea3bb31a9ec6420502fb0\``);
        await queryRunner.query(`ALTER TABLE \`categories_sellers_sellers\` DROP FOREIGN KEY \`FK_d5378757c8579625f1e3badae2a\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_4afd4e629c7e065272b3932617d\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_1337f93918c70837d3cea105d39\``);
        await queryRunner.query(`ALTER TABLE \`likeDislike\` DROP FOREIGN KEY \`FK_4b19ad4d2abce86ad7c33998462\``);
        await queryRunner.query(`DROP INDEX \`IDX_5242ebea3bb31a9ec6420502fb\` ON \`categories_sellers_sellers\``);
        await queryRunner.query(`DROP INDEX \`IDX_d5378757c8579625f1e3badae2\` ON \`categories_sellers_sellers\``);
        await queryRunner.query(`DROP TABLE \`categories_sellers_sellers\``);
        await queryRunner.query(`DROP INDEX \`IDX_19f30566911ed0c3090d676287\` ON \`clicksTitle\``);
        await queryRunner.query(`DROP INDEX \`IDX_83b38ee8f43412f04132d89a9d\` ON \`clicksTitle\``);
        await queryRunner.query(`DROP TABLE \`clicksTitle\``);
        await queryRunner.query(`DROP INDEX \`IDX_42895ddb79e97eaebca76fec95\` ON \`clicksTypes\``);
        await queryRunner.query(`DROP TABLE \`clicksTypes\``);
        await queryRunner.query(`DROP TABLE \`mail_chip\``);
        await queryRunner.query(`DROP TABLE \`contact_us\``);
        await queryRunner.query(`DROP INDEX \`IDX_f46afc39e51f518a78cbe94cb9\` ON \`categories\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_879ac4347c0fb621f2777f8196\` ON \`sellers\``);
        await queryRunner.query(`DROP INDEX \`IDX_8e4d37f39078d9eab65cc9816b\` ON \`sellers\``);
        await queryRunner.query(`DROP TABLE \`sellers\``);
        await queryRunner.query(`DROP TABLE \`review\``);
        await queryRunner.query(`DROP TABLE \`likeDislike\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
