/*
  Warnings:

  - The primary key for the `Jobs` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Jobs" DROP CONSTRAINT "Jobs_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Jobs_id_seq";
