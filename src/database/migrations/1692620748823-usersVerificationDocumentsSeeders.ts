import { MigrationInterface, QueryRunner } from "typeorm"

export class UsersVerificationDocumentsSeeders1692620748823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO users_verification_documents (type,title,priority,slug) VALUES('International','Passport','1','inter_pass')");
        await queryRunner.query("INSERT INTO users_verification_documents (type,title,priority,slug) VALUES('International','Visa','2','inter_visa')");
        await queryRunner.query("INSERT INTO users_verification_documents (type,title,priority,slug) VALUES('International','Driving License','3','inter_lice')");
        await queryRunner.query("INSERT INTO users_verification_documents (type,title,priority,slug) VALUES('International','Driving Permit','4','inter_perm')");
        await queryRunner.query("INSERT INTO users_verification_documents (type,title,priority,slug) VALUES('Local','Passport','1','loca_pass')");
        await queryRunner.query("INSERT INTO users_verification_documents (type,title,priority,slug) VALUES('Local','Drivers License','2','loca_lice')");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
