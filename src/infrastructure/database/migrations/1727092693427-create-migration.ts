import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMigration1727092693427 implements MigrationInterface {
    name = 'CreateMigration1727092693427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seat" ADD "movie_id" uuid`);
        await queryRunner.query(`ALTER TABLE "seat" ADD CONSTRAINT "FK_6a5250661b73a07b96806aee55f" FOREIGN KEY ("movie_id") REFERENCES "movie"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seat" DROP CONSTRAINT "FK_6a5250661b73a07b96806aee55f"`);
        await queryRunner.query(`ALTER TABLE "seat" DROP COLUMN "movie_id"`);
    }

}
